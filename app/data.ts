type Project = {
  name: string
  description: string
  link: string
  media: string
  mediaType: 'image' | 'video'
  accent: 'red' | 'yellow' | 'blue'
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

type CurrentProject = {
  name: string
  link: string
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: '3D & Brand Identities',
    description: 'Concept-driven visual systems, product renders, and brand worlds.',
    link: '/3d-branding',
    media: '/cover.jpg',
    mediaType: 'image',
    accent: 'red',
    id: 'project1',
  },
  {
    name: 'Architectural Renders',
    description: 'Spatial visualization with a focus on mood, material, and light.',
    link: '/architectural-renders',
    media: '/cover.jpg',
    mediaType: 'image',
    accent: 'yellow',
    id: 'project2',
  },
  {
    name: 'Web Development',
    description: 'Modern, high-performance sites with strong brand presence.',
    link: '/web-development',
    media: '/cover.jpg',
    mediaType: 'image',
    accent: 'blue',
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
    company: 'Michael De Luna, AIA',
    title: 'Design & Media Consultant',
    start: '2023',
    end: 'Present',
    link: 'https://www.mdeluna.com',
    id: 'work2',
  },
  {
    company: 'Client Collaborations',
    title: '3D / Brand Designer',
    start: '2016',
    end: '2020',
    link: '#',
    id: 'work3',
  },
]

export const CURRENT_PROJECTS: CurrentProject[] = [
  {
    name: 'plaza.onl',
    link: 'https://plaza.onl',
    id: 'current-1',
  },
  {
    name: 'hue.onl',
    link: 'https://hue.onl',
    id: 'current-2',
  },
  {
    name: 'directory',
    link: 'https://directory.onl',
    id: 'current-3',
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
    link: 'https://www.instagram.com/beaulawrence/',
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
    link: 'https://www.instagram.com/beaulawrence/',
    platform: 'Instagram',
    id: 'feed-ig',
  },
]

export const EMAIL = 'hello@beaulawrence.com'
