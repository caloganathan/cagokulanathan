import { answers } from "@/content/answers";
import { services } from "@/content/services";
import { absoluteUrl, site } from "@/content/site";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.brandName}`,
    "",
    `${site.brandName} is a founder-led agri-biologicals consultancy in ${site.city}, ${site.state}, led by ${site.founder}. ${site.promise} Registration decisions rest with CIB&RC, the Controller of Fertilisers and the Coastal Aquaculture Authority. Facts on the site are limited to an approved claims list.`,
    "",
    "## Key pages",
    ...[
      ["/", "Home"],
      ["/services", "Services"],
      ["/answers", "Short answers"],
      ["/insights", "Essays"],
      ["/about", "About"],
      ["/contact", "Contact"],
      ["/careers", "Work with us (open applications)"],
      ["/disclaimer", "Disclaimer"],
    ].map(([path, label]) => `- [${label}](${absoluteUrl(path)})`),
    "",
    "## Services",
    ...services.map((service) => `- [${service.navLabel}](${absoluteUrl(`/services/${service.slug}`)}): ${service.problemLine}`),
    "",
    "## Answers",
    ...answers.map((answer) => `- [${answer.question}](${absoluteUrl(`/answers/${answer.slug}`)})`),
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
