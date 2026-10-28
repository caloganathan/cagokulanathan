import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/content/site";
import { careerSchema, careerTracks } from "@/lib/validators";

export const dynamic = "force-dynamic";

async function turnstileOk(token: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;
  const body = new URLSearchParams({ secret, response: token });
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body });
  const data = (await response.json()) as { success?: boolean };
  return Boolean(data.success);
}

const oneLine = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = careerSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Please check the required fields, your message (at least 40 characters), and both confirmations." },
      { status: 400 },
    );
  }
  const data = parsed.data;
  if (data.website) return NextResponse.json({ message: "Received." });
  if (!(await turnstileOk(data.turnstileToken))) {
    return NextResponse.json({ message: "The spam check failed. Please retry." }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CAREERS_TO_EMAIL || site.email;
  const from = process.env.RESEND_FROM || "";
  if (!key || !to || !from) {
    return NextResponse.json(
      { message: "Applications are not switched on for this server yet. Please try again shortly or use the contact page." },
      { status: 503 },
    );
  }

  const track = careerTracks[data.track];
  const resend = new Resend(key);
  const text = [
    `Track: ${track}`,
    `Name: ${oneLine(data.name)}`,
    `Email: ${data.email}`,
    `Phone / WhatsApp: ${data.phone || "-"}`,
    `Location: ${oneLine(data.location)}`,
    `Qualification: ${oneLine(data.qualification)}`,
    `Interests: ${data.interests.join(", ")}`,
    `Availability: ${data.availability}`,
    `Work mode: ${data.mode}`,
    `Profile / CV link: ${data.link || "-"}`,
    "Confirmed 18+: yes",
    "",
    data.message,
  ].join("\n");

  await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `Application: ${oneLine(data.name)} (${track})`,
    text,
  });

  await resend.emails.send({
    from,
    to: data.email,
    replyTo: to,
    subject: "We received your application — JK Advisory",
    text: "Thank you for writing to us. We read every application personally and will get back to you, even if the answer is 'not yet'. This is an automatic note so you know it arrived. This is not an offer of employment. — The JK Advisory team",
  });

  return NextResponse.json({ message: "Thank you. Your application has reached the team. We read every one and will write back." });
}
