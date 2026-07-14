export type SectionId = 'services' | 'projects' | 'contact'

export type SidebarSection = {
  id: SectionId
  label: string
}

export const SIDEBAR_SECTIONS: SidebarSection[] = [
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Current Projects' },
  { id: 'contact', label: 'Contact' },
]

export type ServiceSlug = '3d-branding' | 'architectural-renders' | 'web-development'

export type Service = {
  slug: ServiceSlug
  name: string
  description: string
  longDescription: string
  images: string[]
  imageFit: 'cover' | 'contain'
  imageBg: 'dark' | 'white'
  webPreviewUrl?: string
}

export const SERVICES: Service[] = [
  {
    slug: '3d-branding',
    name: '3D & Brand Identities',
    description: 'Concept-driven visual systems, product renders, and brand worlds.',
    longDescription:
      "Branding and graphics for journalist Sumiko Wilson's Music podcast, Contxt — exploring motifs, the process, and the way we listen to music.",
    images: ['/contxt1.png', '/contxt2.png'],
    imageFit: 'contain',
    imageBg: 'white',
    webPreviewUrl: 'https://contxtassets.vercel.app/',
  },
  {
    slug: 'architectural-renders',
    name: 'Architectural Renders',
    description: 'Spatial visualization with a focus on mood, material, and light.',
    longDescription:
      "Conceptual renders for Madison Apothecary's pop up at the Colony Hotel in Palm Beach, Florida. Rendered to scale.",
    images: [
      '/madisonapoth1%20copy.png',
      '/madisonapoth2%20copy.png',
      '/madisonapoth3%20copy.png',
      '/madisonapoth4%20copy.png',
    ],
    imageFit: 'cover',
    imageBg: 'dark',
  },
  {
    slug: 'web-development',
    name: 'Web Development',
    description: 'Modern, high-performance sites with strong brand presence.',
    longDescription:
      'Architecture firm site for Michael De Luna, AIA — portfolio, code/zoning resources, and project filing.',
    images: ['/mdeluna-petrossian.png'],
    imageFit: 'contain',
    imageBg: 'white',
    webPreviewUrl: 'https://www.mdeluna.com',
  },
]

export type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string | null
  id: string
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Independent Studio',
    title: 'Director, Designer',
    start: '2020',
    end: 'Present',
    link: null,
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
    link: null,
    id: 'work4',
  },
]

export type CurrentProject = {
  name: string
  description?: string
  link: string
  id: string
}

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
  {
    name: 'mdeluna.com',
    description: 'Architecture firm site — portfolio, code/zoning resources, project filing.',
    link: 'https://www.mdeluna.com',
    id: 'current-4',
  },
  {
    name: 'plaza.onl',
    link: 'https://plaza.onl/home',
    id: 'current-5',
  },
]

export type SocialLink = {
  label: string
  link: string
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/beaulawrence/',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/beaulawrence/',
  },
  {
    label: 'GitHub',
    link: 'https://github.com/beaurlirl',
  },
]

export const EMAIL = 'beaurlirl@gmail.com'
