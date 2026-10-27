import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/content/site";

const allowAgents = [
  "Googlebot",
  "Bingbot",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "Google-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...allowAgents.map((userAgent) => ({ userAgent, allow: "/", disallow: "/api/" })),
      { userAgent: "*", allow: "/", disallow: "/api/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
