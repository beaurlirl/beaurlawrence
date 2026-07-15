export type SectionId = 'work' | 'about' | 'contact'

export type NavSection = {
  id: SectionId
  label: string
}

export const NAV_SECTIONS: NavSection[] = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export type WorkItem = {
  id: string
  year: string
  title: string
  category: string
  link?: string
  images?: string[]
  imageFit?: 'cover' | 'contain'
  imageBg?: 'dark' | 'white'
  description?: string
}

// Newest first. Add rows here as new work ships — the list adapts automatically.
export const WORK_ITEMS: WorkItem[] = [
  {
    id: 'mdeluna',
    year: '24',
    title: 'mdeluna.com',
    category: 'Web Development',
    link: 'https://www.mdeluna.com',
    images: ['/mdeluna-petrossian.png'],
    imageFit: 'contain',
    imageBg: 'white',
    description:
      'Architecture firm site for Michael De Luna, AIA — portfolio, code/zoning resources, and project filing.',
  },
  {
    id: 'hue',
    year: '24',
    title: 'hue.onl',
    category: 'Web App',
    link: 'https://hue.onl',
  },
  {
    id: 'madison-apothecary',
    year: '23',
    title: 'Madison Apothecary',
    category: 'Architecture',
    images: [
      '/madisonapoth1%20copy.png',
      '/madisonapoth2%20copy.png',
      '/madisonapoth3%20copy.png',
      '/madisonapoth4%20copy.png',
    ],
    imageFit: 'cover',
    imageBg: 'dark',
    description:
      "Conceptual renders for Madison Apothecary's pop up at the Colony Hotel in Palm Beach, Florida. Rendered to scale.",
  },
  {
    id: 'catalog',
    year: '23',
    title: 'catalog.onl',
    category: 'Web App',
    link: 'https://catalog.onl',
  },
  {
    id: 'contxt',
    year: '23',
    title: 'Contxt',
    category: '3D & Brand',
    link: 'https://contxtassets.vercel.app/',
    images: ['/contxt1.png', '/contxt2.png'],
    imageFit: 'contain',
    imageBg: 'white',
    description:
      "Branding and graphics for journalist Sumiko Wilson's Music podcast, Contxt — exploring motifs, the process, and the way we listen to music.",
  },
  {
    id: 'directory',
    year: '22',
    title: 'directory.onl',
    category: 'Web App',
    link: 'https://directory.onl',
  },
  {
    id: 'plaza',
    year: '22',
    title: 'plaza.onl',
    category: 'Web App',
    link: 'https://plaza.onl/home',
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
