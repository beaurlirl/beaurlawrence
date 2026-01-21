type Project = {
  name: string
  description: string
  link: string
  media: string
  mediaType: 'image' | 'video'
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type FeedItem = {
  title: string
  description: string
  link: string
  platform: string
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: '3D & Brand Identities',
    description: 'Concept-driven visual systems, product renders, and brand worlds.',
    link: '/3d-branding',
    media: '/cover.jpg',
    mediaType: 'image',
    id: 'project1',
  },
  {
    name: 'Architectural Renders',
    description: 'Spatial visualization with a focus on mood, material, and light.',
    link: '/architectural-renders',
    media: '/cover.jpg',
    mediaType: 'image',
    id: 'project2',
  },
  {
    name: 'Web Development',
    description: 'Modern, high-performance sites with strong brand presence.',
    link: '/web-development',
    media: '/cover.jpg',
    mediaType: 'image',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Independent Studio',
    title: 'Creative Director',
    start: '2020',
    end: 'Present',
    link: '#',
    id: 'work1',
  },
  {
    company: 'Client Collaborations',
    title: '3D / Brand Designer',
    start: '2016',
    end: '2020',
    link: '#',
    id: 'work2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/feed/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'feed-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description: 'A deeper look at the shift to independent work.',
    link: '/feed/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'feed-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description: 'Lessons on process, pricing, and creative growth.',
    link: '/feed/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'feed-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide to MDX metadata for clean SEO setups.',
    link: '/feed/example-mdx-metadata',
    uid: 'feed-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Instagram',
    link: 'https://instagram.com/',
  },
  {
    label: 'Behance',
    link: 'https://www.behance.net/',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/',
  },
]

export const FEED_ITEMS: FeedItem[] = [
  {
    title: 'Instagram — latest drops',
    description: 'Short-form visuals, renders, and concept snippets.',
    link: 'https://instagram.com/',
    platform: 'Instagram',
    id: 'feed-ig',
  },
  {
    title: 'Behance — case studies',
    description: 'Long-form breakdowns of brand and visualization work.',
    link: 'https://www.behance.net/',
    platform: 'Behance',
    id: 'feed-behance',
  },
]

export const EMAIL = 'hello@beaulawrence.com'
