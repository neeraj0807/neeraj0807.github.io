export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  icon?: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  icon?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  duration: string;
  techStack: string[];
  link?: string;
  images: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  skills: string[];
  experiences: Experience[];
  education: Education[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  name: 'Neeraj Agrawal',
  title: 'Senior Technical Lead',
  bio: 'Placeholder for your bio. I am a talented and experienced developer with a strong background in frontend development and technical leadership. I specialize in building scalable, user-friendly web applications using modern technologies. My expertise lies in ReactJS, TypeScript, and Node.js, with a proven track record of leading high-performing development teams. I am passionate about clean code, best practices, and continuous learning.',
  email: 'neeraj.agrawal7478@gmail.com',
  phone: '+919981462999',
  location: 'Bangalore, India',
  github: 'https://github.com/neeraj0807',
  linkedin: 'https://www.linkedin.com/in/neerajagrawal0807/',
  skills: ['ReactJS', 'Node.js', 'TypeScript'],
  experiences: [
    {
      id: 1,
      title: 'Senior Technical Lead',
      company: 'HCL Tech',
      duration: 'Sep 2020 - Till now',
      description: 'Leading Frontend developers and managing multiple projects',
      icon: '🚀',
    },
  ],
  education: [
    {
      id: 1,
      degree: 'MCM (Master of Computer Management)',
      institution: 'DAVV',
      duration: '2000 - 2003',
      location: 'Indore, India',
      icon: '🎓',
    },
  ],
  projects: [
    {
      id: 1,
      title: 'Transaction Filtering',
      description:
        'A robust transaction filtering system built to handle complex queries and data analysis. The system provides real-time filtering capabilities with an intuitive user interface.',
      duration: '5 Months',
      techStack: ['ReactJS', 'JavaScript'],
      images: [
        'https://via.placeholder.com/600x400?text=Transaction+Filtering+1',
        'https://via.placeholder.com/600x400?text=Transaction+Filtering+2',
        'https://via.placeholder.com/600x400?text=Transaction+Filtering+3',
      ],
    },
  ],
};
