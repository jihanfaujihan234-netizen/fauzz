/**
 * ============================================================
 *  SEMUA KONTEN PORTFOLIO ADA DI FILE INI
 *  Ubah nama, role, skills, proyek, dan link sosialmu di sini.
 * ============================================================
 */

export const profile = {
  name: 'Fauzi',
  initials: 'F',
  role: 'Full-Stack & Creative Developer',
  rotatingRoles: ['Full-Stack Developer', 'UI/UX Engineer', '3D Web Enthusiast', 'Problem Solver'],
  tagline:
    'Saya membangun pengalaman web yang imersif — memadukan kode yang rapi, desain yang elegan, dan sentuhan 3D yang futuristic.',
  location: 'Indonesia',
  email: 'halo@fauzi.dev',
  availability: 'Tersedia untuk proyek freelance',
  yearsOfExperience: 5,
  resumeUrl: '#',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { value: 5, suffix: '+', label: 'Tahun Pengalaman' },
  { value: 40, suffix: '+', label: 'Proyek Selesai' },
  { value: 25, suffix: '+', label: 'Klien Senang' },
  { value: 1200, suffix: '+', label: 'Cangkir Kopi' },
]

export const aboutText = [
  'Halo! Saya Fauzi, seorang developer yang bersemangat membangun aplikasi web yang tidak hanya berfungsi dengan baik, tetapi juga terasa menyenangkan saat digunakan.',
  'Perjalanan saya dimulai dari rasa penasaran mengubah ide sederhana menjadi produk nyata. Kini saya fokus di ekosistem React, membangun antarmuka interaktif dengan animasi halus dan elemen 3D berbasis WebGL.',
]

export const aboutHighlights = [
  { icon: 'MapPin', label: 'Lokasi', value: 'Indonesia (GMT+7)' },
  { icon: 'Mail', label: 'Email', value: 'halo@fauzi.dev' },
  { icon: 'GraduationCap', label: 'Fokus', value: 'Web & 3D Experience' },
  { icon: 'Zap', label: 'Status', value: 'Open for work' },
]

export const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'Nusantara Digital Labs',
    period: '2023 — Sekarang',
    description: 'Memimpin redesign dashboard analitik berbasis React & Three.js untuk 50rb+ pengguna.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Skyline Studio',
    period: '2021 — 2023',
    description: 'Membangun 20+ produk web end-to-end: landing page, e-commerce, dan SaaS internal.',
  },
  {
    role: 'Web Developer (Freelance)',
    company: 'Self-employed',
    period: '2019 — 2021',
    description: 'Menggarap beragam proyek klien dari UI/UX hingga deployment dan maintenanance.',
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'CodeXml',
    description: 'Antarmuka modern yang cepat dan aksesibel.',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Three.js / R3F', level: 85 },
    ],
  },
  {
    title: 'Backend',
    icon: 'Server',
    description: 'API yang andal, aman, dan mudah diskalakan.',
    skills: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'Python / FastAPI', level: 75 },
      { name: 'REST / GraphQL', level: 85 },
    ],
  },
  {
    title: 'Design & Tools',
    icon: 'Palette',
    description: 'Dari wireframe sampai pipeline deployment.',
    skills: [
      { name: 'Figma / UI Design', level: 87 },
      { name: 'Motion Design', level: 80 },
      { name: 'Git / CI-CD', level: 90 },
      { name: 'Docker / Cloud', level: 78 },
    ],
  },
]

/** Teks ticker teknologi di bagian Skills */
export const techTicker = [
  'React',
  'Next.js',
  'TypeScript',
  'Three.js',
  'Tailwind CSS',
  'Framer Motion',
  'Node.js',
  'PostgreSQL',
  'Figma',
  'Docker',
  'Git',
  'Vite',
]

export const projects = [
  {
    title: 'Nebula Dashboard',
    category: 'Web App',
    description:
      'Dashboard analitik realtime dengan grafik interaktif, dark mode, dan rendering 3D untuk visualisasi data kompleks.',
    tags: ['React', 'Three.js', 'D3.js', 'Node.js'],
    icon: 'LayoutDashboard',
    gradient: 'from-[#1C1C21] via-[#2E2E35] to-[#141418]',
    ink: 'dark',
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    title: 'Aurora E-Commerce',
    category: 'Web App',
    description:
      'Toko online headless dengan preview produk 360°, keranjang optimistis, dan checkout 3 langkah.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
    icon: 'ShoppingCart',
    gradient: 'from-[#33333B] via-[#4A4A54] to-[#22222A]',
    ink: 'dark',
    liveUrl: '#',
    repoUrl: '#',
    featured: false,
  },
  {
    title: 'Orbital Landing 3D',
    category: '3D Experience',
    description:
      'Landing page futuristic dengan lanyard physics, partikel interaktif, dan transisi halus antar section.',
    tags: ['R3F', 'Rapier', 'Framer Motion'],
    icon: 'Atom',
    gradient: 'from-[#8A8A95] via-[#E0E0E8] to-[#9A9AA5]',
    ink: 'light',
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    title: 'Cinemora',
    category: 'Mobile',
    description:
      'Aplikasi katalog film dengan pencarian cerdas, daftar favorit sinkron, dan animasi mikro yang halus.',
    tags: ['React Native', 'TMDB API', 'Expo'],
    icon: 'Film',
    gradient: 'from-[#25252C] via-[#3D3D46] to-[#1A1A20]',
    ink: 'dark',
    liveUrl: '#',
    repoUrl: '#',
    featured: false,
  },
  {
    title: 'DevSpace CLI',
    category: 'Tool',
    description:
      'CLI produktivitas developer untuk scaffold proyek otomatis, sinkron config, dan deploy sekali klik.',
    tags: ['Node.js', 'Inquirer', 'Docker'],
    icon: 'Terminal',
    gradient: 'from-[#4A4A54] via-[#6E6E78] to-[#2E2E35]',
    ink: 'dark',
    liveUrl: '#',
    repoUrl: '#',
    featured: false,
  },
  {
    title: 'Lumina Studio',
    category: 'Web App',
    description:
      'Editor gambar berbasis browser dengan filter realtime WebGL, layer, dan ekspor multi-format.',
    tags: ['WebGL', 'Canvas API', 'Vite', 'Zustand'],
    icon: 'PenTool',
    gradient: 'from-[#B9B9C2] via-[#E8E8EC] to-[#A0A0AA]',
    ink: 'light',
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
]

export const socials = [
  { name: 'GitHub', url: 'https://github.com', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
  { name: 'X', url: 'https://x.com', icon: 'X' },
]
