import { NextResponse } from "next/server";
import { Resend } from "resend";
import { leadMagnets } from "@/content/lead-magnets";
import { site } from "@/content/site";
import { checklistPdf } from "@/lib/pdf";
import { leadSchema } from "@/lib/validators";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ message: "Add a name, a valid email and consent." }, { status: 400 });
  }
  if (parsed.data.website) {
    return NextResponse.json({ message: "Received." });
  }
  const magnet = leadMagnets[parsed.data.magnet];
  const pdf = checklistPdf(magnet.title, magnet.items);
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM || "";
  if (key && from && site.email) {
    const resend = new Resend(key);
    await resend.emails.send({
      from,
      to: site.email,
      subject: `Checklist request: ${parsed.data.name}`,
      text: `${parsed.data.name} <${parsed.data.email}> requested ${magnet.title}.`,
    });
    await resend.emails.send({
      from,
      to: parsed.data.email,
      subject: magnet.title,
      text: "The checklist is attached. It is general guidance, not an approval. — Dr. Gokulanathan A.",
      attachments: [{ filename: magnet.fileName, content: Buffer.from(pdf) }],
    });
  }
  return new NextResponse(Buffer.from(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${magnet.fileName}"`,
    },
  });
}
