type Project = {
  name: string
  description: string
  link: string
  media: string
  mediaType: 'image' | 'video'
  accent: 'dark' | 'medium' | 'light'
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

type SocialLink = {
  label: string
  link: string
}

type CurrentProject = {
  name: string
  link: string
  id: string
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
    accent: 'dark',
    id: 'project1',
  },
  {
    name: 'Architectural Renders',
    description: 'Spatial visualization with a focus on mood, material, and light.',
    link: '/architectural-renders',
    media: '/cover.jpg',
    mediaType: 'image',
    accent: 'medium',
    id: 'project2',
  },
  {
    name: 'Web Development',
    description: 'Modern, high-performance sites with strong brand presence.',
    link: '/web-development',
    media: '/cover.jpg',
    mediaType: 'image',
    accent: 'light',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Independent Studio',
    title: 'Director, Designer',
    start: '2020',
    end: 'Present',
    link: '#',
    id: 'work1',
  },
  {
    company: 'Michael De Luna, AIA, Architect',
    title: 'Design & Media Consultant',
    start: '2023',
    end: 'Present',
    link: 'https://www.mdeluna.com',
    id: 'work2',
  },
  {
    company: 'Muse Labs (YC S21)',
    title: 'Marketing Consultant',
    start: '2020',
    end: '2021',
    link: '#',
    id: 'work4',
  },
]

export const CURRENT_PROJECTS: CurrentProject[] = [
  {
    name: 'hue.onl',
    link: 'https://hue.onl',
    id: 'current-1',
  },
  {
    name: 'catalog.onl',
    link: 'https://catalog.onl',
    id: 'current-2',
  },
  {
    name: 'directory.onl',
    link: 'https://directory.onl',
    id: 'current-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/beaulawrence/',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/beaulawrence/',
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

export const EMAIL = 'beaurlirl@gmail.com'

export type FeaturedProject = {
  title: string
  description: string
  images: string[] // paths to project images — add more as you upload
  category: 'graphic' | '3d' | 'web'
  imageFit?: 'cover' | 'contain' // contain = fit whole image in frame
  imageBg?: 'dark' | 'white' // background behind image
  webPreviewUrl?: string // live site preview
}

export const FEATURED_PROJECTS: Record<string, FeaturedProject> = {
  '3d-branding': {
    title: "Branding and graphics for journalist Sumiko Wilson's Music podcast, Contxt",
    description: 'Exploring motifs, the process, and the way we listen to music.',
    images: ['/contxt1.png', '/contxt2.png'],
    category: '3d',
    imageFit: 'contain',
    imageBg: 'white',
    webPreviewUrl: 'https://contxtassets.vercel.app/',
  },
  'architectural-renders': {
    title: 'Madison Apothecary at the Colony Hotel in Palm Beach',
    description:
      "Conceptual renders for Madison Apothecary's pop up at the Colony Hotel in Palm Beach, Florida. Rendered to scale.",
    images: [
      '/madisonapoth1%20copy.png',
      '/madisonapoth2%20copy.png',
      '/madisonapoth3%20copy.png',
      '/madisonapoth4%20copy.png',
    ],
    category: '3d',
  },
  'web-development': {
    title: 'Michael De Luna, AIA, Architect',
    description:
      'Architecture firm site with portfolio, code/zoning resources, and project filing.',
    images: ['/mdeluna-petrossian.png'],
    category: 'web',
    imageFit: 'contain',
    imageBg: 'white',
    webPreviewUrl: 'https://www.mdeluna.com',
  },
}
