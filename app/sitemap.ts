import type { MetadataRoute } from "next";

import { divisions, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/divisions", "/compliance", "/leadership", "/contact"];

  const staticRoutes = routes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date()
  }));

  const divisionRoutes = divisions.map((division) => ({
    url: `${site.domain}/divisions/${division.slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...divisionRoutes];
}
