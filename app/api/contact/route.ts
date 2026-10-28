import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/content/site";
import { contactSchema } from "@/lib/validators";

export const dynamic = "force-dynamic";

async function turnstileOk(token: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;
  const body = new URLSearchParams({ secret, response: token });
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
  });
  const data = (await response.json()) as { success?: boolean };
  return Boolean(data.success);
}

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ message: "Check the required fields, including consent." }, { status: 400 });
  }
  if (parsed.data.website) {
    return NextResponse.json({ message: "Received." });
  }
  if (!(await turnstileOk(parsed.data.turnstileToken))) {
    return NextResponse.json({ message: "The spam check failed. Please retry." }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = site.email;
  const from = process.env.RESEND_FROM || "";
  if (!key || !to || !from) {
    return NextResponse.json(
      {
        message:
          "The enquiry is valid, and email delivery is not configured on this server yet. Use the email or booking link once they are published, or try again after setup.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(key);
  const text = [
    `Name: ${parsed.data.name}`,
    `Email: ${parsed.data.email}`,
    `Company: ${parsed.data.company}`,
    `Role: ${parsed.data.role}`,
    `Segment: ${parsed.data.segment}`,
    `State: ${parsed.data.state}`,
    `Channel: ${parsed.data.channel}`,
    "",
    parsed.data.problem,
  ].join("\n");

  await resend.emails.send({
    from,
    to,
    replyTo: parsed.data.email,
    subject: `Enquiry from ${parsed.data.name} (${parsed.data.segment})`,
    text,
  });

  await resend.emails.send({
    from,
    to: parsed.data.email,
    replyTo: to,
    subject: "We have your note — JK Advisory",
    text: "Thank you. We reply within one working day (IST). This is an automatic note so you know the message arrived. — The JK Advisory team",
  });

  return NextResponse.json({ message: "Sent. We reply within one working day (IST)." });
}
