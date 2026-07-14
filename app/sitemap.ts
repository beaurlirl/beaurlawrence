import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/3d-branding', '/architectural-renders', '/web-development']

  return routes.map((route) => ({
    url: `${WEBSITE_URL}${route}`,
    lastModified: new Date(),
  }))
}
