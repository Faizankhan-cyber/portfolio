import {
  StatItem,
  AboutCardItem,
  SkillCategoryGroup,
  ProjectItem,
  CredentialItem,
  ExperienceItem,
  ContactChannel
} from '../types';

export const PERSONAL_INFO = {
  name: 'Faizan Khan Khaleel',
  shortName: 'Faizan Khan',
  terminalLogo: 'root@faizan',
  location: 'Bengaluru, Karnataka, India',
  college: 'SSMRV College',
  degree: 'Bachelor of Computer Applications (BCA)',
  diploma: 'Advanced Diploma in Cloud Architecture and Cybersecurity',
  role: 'Cloud Architecture & Cybersecurity Student',
  headline: 'Building secure cloud infrastructure. Learning to defend it.',
  introduction:
    "I'm a BCA student specializing in Cloud Architecture and Cybersecurity. I build hands-on projects around Azure infrastructure, identity and access management, Linux, and digital threat detection, documenting what I learn along the way.",
  email: 'faizankhanex@gmail.com',
  github: 'https://github.com/Faizankhan-cyber',
  linkedin: 'https://www.linkedin.com/in/faizan-khan-khaleel/',
  skillTags: [
    'Microsoft Azure',
    'Entra ID & RBAC',
    'Linux Administration',
    'Terraform IaC',
    'Threat Analysis',
    'Network Security'
  ],
  currentFocus: {
    title: 'Current Technical Focus',
    target: 'Azure Infrastructure & IAM Hardening',
    labInProgress: 'Multi-Role RBAC & Terraform Automation',
    studyTrack: 'Security, Compliance & Identity (SC-900 / AZ-900)',
    operatingSystem: 'Ubuntu Linux 24.04 LTS (Primary Lab OS)'
  }
};

export const QUICK_METRICS: StatItem[] = [
  { id: 'projects', icon: 'fa-solid fa-cloud-arrow-up', value: '5', label: 'Technical Projects', code: 'LABS_BUILT: 05' },
  { id: 'cloud', icon: 'fa-solid fa-server', value: 'Azure', label: 'Primary Cloud Focus', code: 'ENV_PRIMARY: AZURE' },
  { id: 'credentials', icon: 'fa-solid fa-certificate', value: '8+', label: 'Courses & Simulations', code: 'CERTS_LOG: 08' },
  { id: 'community', icon: 'fa-solid fa-code-pull-request', value: 'GSSoC 26', label: 'Open Source Contributor', code: 'COMMUNITY: ACTIVE' }
];

export const ABOUT_CARDS: AboutCardItem[] = [
  {
    id: 'academic',
    icon: 'fa-solid fa-graduation-cap',
    title: 'Academic Foundation',
    subtitle: 'SSMRV COLLEGE, BENGALURU',
    description:
      'Pursuing a Bachelor of Computer Applications (BCA) alongside an Advanced Diploma in Cloud Architecture and Cybersecurity. Developing core competencies in computer networking, systems programming, and modern infrastructure operations.',
    items: [
      'SSMRV College — BCA Program',
      'Advanced Diploma in Cloud Architecture & Cybersecurity',
      'Bengaluru, Karnataka, India'
    ],
    commandPrompt: 'cat /etc/education.conf'
  },
  {
    id: 'philosophy',
    icon: 'fa-solid fa-shield-halved',
    title: 'Hands-on Learning Discipline',
    subtitle: 'SYSTEMS OVER THEORY',
    description:
      'I approach cloud security not through superficial theory, but by provisioning isolated infrastructure, configuring access controls, simulating threats, and writing clear deployment documentation.',
    items: [
      'Least-privilege role assignments and audit trails',
      'Zero-trust network segregation with custom VNets and NSGs',
      'Reproducible provisioning using Terraform'
    ],
    commandPrompt: 'cat /opt/philosophy/creed.md'
  },
  {
    id: 'focus-areas',
    icon: 'fa-solid fa-network-wired',
    title: 'Core Technical Pursuits',
    subtitle: 'IDENTITY & INFRASTRUCTURE',
    description:
      'Focused on the intersection of cloud services, Linux administration, and defensive security. Exploring how robust identity architectures protect modern enterprise workloads.',
    items: [
      'Microsoft Azure Virtual Networks & Virtual Machines',
      'Microsoft Entra ID (Azure AD) security groups and RBAC',
      'Linux user rights, SSH key governance, and Nginx'
    ],
    commandPrompt: 'cat /var/log/interests.log'
  }
];

export const SKILL_CATEGORIES: SkillCategoryGroup[] = [
  {
    id: 'cloud',
    title: 'Cloud Infrastructure',
    groupCode: 'MOD_CLOUD',
    icon: 'fa-solid fa-cloud',
    description: 'Practical administration and architecture on Microsoft Azure.',
    skills: [
      { name: 'Microsoft Azure', context: 'Primary cloud platform' },
      { name: 'Azure Virtual Machines', context: 'Ubuntu Linux deployment & sizing' },
      { name: 'Virtual Networks (VNet)', context: 'Subnet segmentation & CIDR design' },
      { name: 'Azure RBAC', context: 'Role assignments & permission scoping' }
    ]
  },
  {
    id: 'security',
    title: 'Identity & Security',
    groupCode: 'MOD_IAM_SEC',
    icon: 'fa-solid fa-shield-halved',
    description: 'Access governance, network perimeter lockdown, and threat analysis.',
    skills: [
      { name: 'Microsoft Entra ID (Azure AD)', context: 'Users, groups & enterprise access' },
      { name: 'Identity & Access Management (IAM)', context: 'Least privilege & role validation' },
      { name: 'Network Security (NSG)', context: 'Inbound/outbound port filtering' },
      { name: 'Phishing Awareness', context: 'Social engineering vector identification' },
      { name: 'Threat Analysis', context: 'URL, domain & payload reconnaissance' }
    ]
  },
  {
    id: 'systems',
    title: 'Systems & Administration',
    groupCode: 'MOD_SYSTEMS',
    icon: 'fa-brands fa-linux',
    description: 'Operating systems, secure remote access, and terminal operations.',
    skills: [
      { name: 'Linux', context: 'System administration & configuration' },
      { name: 'Ubuntu', context: 'Primary server lab distribution' },
      { name: 'SSH & Key Authentication', context: 'Passwordless cryptographic access' },
      { name: 'Command-Line Operations', context: 'Bash utilities, cron, and package management' }
    ]
  },
  {
    id: 'automation',
    title: 'Automation & Development',
    groupCode: 'MOD_DEV_IAC',
    icon: 'fa-solid fa-code',
    description: 'Infrastructure-as-code and scripting for system automation.',
    skills: [
      { name: 'Terraform', context: 'Declarative resource provisioning' },
      { name: 'Python', context: 'Network sockets & security scripts' },
      { name: 'JavaScript', context: 'Application logic & scripts' },
      { name: 'Node.js', context: 'Backend runtimes & API services' },
      { name: 'Git & GitHub', context: 'Version control & collaboration' }
    ]
  },
  {
    id: 'web',
    title: 'Web Technologies',
    groupCode: 'MOD_WEB_STACK',
    icon: 'fa-solid fa-globe',
    description: 'Modern frontend tooling used in project and hackathon applications.',
    skills: [
      { name: 'React', context: 'Component-based user interfaces' },
      { name: 'TypeScript', context: 'Type-safe frontends' },
      { name: 'Vite', context: 'Fast modern build tooling' },
      { name: 'Tailwind CSS', context: 'Utility-first styling' },
      { name: 'Vercel', context: 'Static site & frontend edge deployment' }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'entra-id-rbac',
    title: 'Microsoft Entra ID & Azure RBAC: Identity and Access Management',
    subtitle: 'Standalone IAM Lab with Role-Based Access Validation',
    description:
      'A hands-on identity and access management laboratory built on Microsoft Azure. Configured test users and security groups in Microsoft Entra ID, deployed Azure RBAC assignments, and enforced least-privilege permissions across different team roles with Terraform automation and step-by-step audit documentation.',
    keyHighlights: [
      'Configured test user accounts and security groups in Microsoft Entra ID',
      'Scoped Azure RBAC roles to validate segregation of duties (SoD)',
      'Automated provisioning workflows using Terraform infrastructure-as-code',
      'Created comprehensive documentation verifying least-privilege access rules'
    ],
    status: 'STANDALONE LAB',
    isProminent: true,
    tags: ['Microsoft Entra ID', 'Azure RBAC', 'Terraform', 'IAM', 'Security Governance'],
    githubUrl: 'https://github.com/Faizankhan-cyber/microsoft-entra-id-azure-rbac-standalone'
  },
  {
    id: 'azure-web-server',
    title: 'Secure Linux Web Server on Azure',
    subtitle: 'Azure Enterprise Infrastructure (V1)',
    description:
      'The initial release of the Azure Enterprise Infrastructure project. Deployed a hardened Ubuntu Linux virtual machine within a custom Azure Virtual Network (VNet) with isolated subnets, Network Security Groups (NSGs) restricting open ports, passwordless SSH key pair authentication, and an Nginx web server.',
    keyHighlights: [
      'Segmented Azure Virtual Network (VNet) with dedicated subnet routing',
      'Strict Network Security Group (NSG) perimeter firewall rules',
      'SSH key authentication with password login disabled on Ubuntu VM',
      'Nginx web server setup with deployment and troubleshooting runbooks'
    ],
    status: 'DEPLOYED LAB',
    isProminent: true,
    tags: ['Azure VM', 'VNet', 'NSG', 'Ubuntu Linux', 'SSH Keys', 'Nginx'],
    githubUrl: 'https://github.com/Faizankhan-cyber/azure-enterprise-infrastructure'
  },
  {
    id: 'threatlens',
    title: 'ThreatLens | Digital Threat Detection Platform',
    subtitle: 'Internal Smart India Hackathon 2026 Participation',
    description:
      'A digital threat investigation and reconnaissance platform developed for an internal Smart India Hackathon event at SSMRV College with Team Cloud Sentinals (held on 14 August 2026). Enables users to analyze suspicious URLs, phishing indicators, messages, emails, screenshots, QR codes, and phone numbers.',
    keyHighlights: [
      'Built with Team Cloud Sentinals for internal SSMRV College hackathon (14 Aug 2026)',
      'Analysis interface for URLs, phishing links, QR codes, and suspicious messages',
      'Modern type-safe frontend built with React, TypeScript, and Vite',
      'Deployed on Vercel with responsive dark cyber-interface'
    ],
    status: 'LIVE DEMO',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vercel', 'Threat Analysis'],
    githubUrl: 'https://github.com/Faizankhan-cyber/ThreatLens',
    liveUrl: 'https://threatlens-project.vercel.app/',
    eventContext: 'Internal Smart India Hackathon 2026, SSMRV College (Team Cloud Sentinals)'
  },
  {
    id: 'togetherly',
    title: 'Togetherly | Workforce Intelligence Platform',
    subtitle: 'Hackathon Project with Team Weird Minds at AMC Engineering College',
    description:
      'A workforce intelligence platform engineered during an inter-college hackathon at AMC Engineering College with Team Weird Minds. Features include employee-to-project skill matching, team composition suggestions, skills-gap insights, and workload allocation simulations.',
    keyHighlights: [
      'Collaborative hackathon build with Team Weird Minds at AMC Engineering College',
      'Employee-to-project matching and dynamic skills-gap insights interface',
      'Workload visualization and scenario simulation components',
      'Responsive frontend built with React, TypeScript, Vite, and Tailwind CSS'
    ],
    status: 'LIVE DEMO',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Hackathon Build'],
    liveUrl: 'https://togetherly-omega.vercel.app/',
    eventContext: 'Hackathon at AMC Engineering College (Team Weird Minds)'
  },
  {
    id: 'bountyvault',
    title: 'BountyVault | Decentralized Escrow System',
    subtitle: 'Algorand Blockchain Hackathon Project',
    description:
      'A decentralized bounty escrow project on Algorand exploring smart-contract-based fund locking and release, milestone dispute handling, deadline-based refund logic, and verifiable on-chain transactions.',
    keyHighlights: [
      'Explored smart-contract escrow mechanics on the Algorand blockchain',
      'Designed transactional workflow for automated milestone disbursement',
      'Integrated dispute and refund conditions for missed delivery deadlines'
    ],
    status: 'HACKATHON BUILD',
    tags: ['Algorand', 'Blockchain', 'Escrow System', 'Smart Contracts']
  }
];

export const CREDENTIALS: CredentialItem[] = [
  {
    id: 'datacamp-az900',
    title: 'Understanding Azure Fundamentals (AZ-900)',
    issuer: 'DataCamp',
    type: 'Course Certificate',
    verificationStatus: 'Course Completed',
    topics: ['Cloud architecture basics', 'Azure compute, storage & network services', 'Pricing and SLAs']
  },
  {
    id: 'datacamp-github',
    title: 'GitHub Foundations',
    issuer: 'DataCamp',
    type: 'Course Certificate',
    verificationStatus: 'Course Completed',
    topics: ['Git branching & merges', 'GitHub repositories, issues & pull requests', 'Collaboration workflows']
  },
  {
    id: 'datacamp-python',
    title: 'Introduction to Python for Developers',
    issuer: 'DataCamp',
    type: 'Course Certificate',
    verificationStatus: 'Course Completed',
    topics: ['Python control structures', 'Functions, modules & scripts', 'Basic data processing']
  },
  {
    id: 'abstream-linux',
    title: 'Linux System Engineering',
    issuer: 'Abstream Technologies',
    type: 'Course Certificate',
    verificationStatus: 'Completed & Earned',
    topics: ['Linux CLI navigation & permissions', 'Service management (systemctl)', 'Networking and shell basics']
  },
  {
    id: 'abstream-dc',
    title: 'Introduction to Data Centre & Cloud Technologies',
    issuer: 'Abstream Technologies',
    type: 'Course Certificate',
    verificationStatus: 'Completed & Earned',
    topics: ['Data centre physical infrastructure', 'Virtualization & hypervisors', 'Cloud deployment models']
  },
  {
    id: 'tryhackme-presec',
    title: 'Pre-Security Certification Path',
    issuer: 'TryHackMe',
    type: 'Learning Path',
    verificationStatus: 'Completed & Earned',
    topics: ['Network fundamentals (OSI, TCP/IP)', 'Linux CLI fundamentals', 'Web application security basics']
  },
  {
    id: 'forage-deloitte',
    title: 'Deloitte Australia - Cyber Job Simulation',
    issuer: 'Forage',
    type: 'Job Simulation',
    verificationStatus: 'Simulation Completed',
    topics: ['Security advisory simulation', 'Cloud incident response review', 'Risk assessment reporting']
  },
  {
    id: 'cisco-intro-cyber',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    type: 'Course Certificate',
    verificationStatus: 'Completed & Earned',
    topics: ['Cybersecurity fundamentals', 'Common threats, malware & attacks', 'Defensive practices']
  },
  {
    id: 'msft-sc900-prep',
    title: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)',
    issuer: 'Microsoft',
    type: 'Certification',
    verificationStatus: 'Curriculum Study / Flagged for Review',
    isFlaggedForReview: true,
    topics: ['Microsoft Entra ID principles', 'Cloud security capabilities', 'Compliance & governance concepts']
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'gssoc-2026',
    period: 'May 2026 – August 2026',
    role: 'Open Source Contributor',
    organization: 'GirlScript Summer of Code (GSSoC) 2026',
    type: 'Community',
    description:
      'Participated as an open source contributor in GirlScript Summer of Code 2026. Collaborated with maintainers and community members, submitting pull requests, fixing documentation and code issues, and practicing Git workflows.',
    points: [
      'Contributed to open source repositories during the May–August 2026 program cycle',
      'Followed project contribution guidelines, branch conventions, and PR review cycles',
      'Gained real-world collaboration experience using Git and GitHub'
    ],
    tags: ['Git', 'GitHub', 'Open Source', 'Collaboration']
  },
  {
    id: 'self-directed-study',
    period: 'September 2025 – Present',
    role: 'Self-Directed Cloud & Security Lab Practice',
    organization: 'Independent Lab & Project Work',
    type: 'Independent',
    description:
      'Dedicated learning journey alongside BCA coursework. Setting up cloud laboratories in Microsoft Azure, conducting hands-on Linux administration, practicing defensive reconnaissance, and implementing infrastructure-as-code.',
    points: [
      'Built standalone Microsoft Entra ID and Azure RBAC permission matrices',
      'Configured hardened Ubuntu web servers with custom VNets and NSGs on Azure',
      'Participated in college and inter-college hackathons (Smart India Hackathon internal event, AMC Hackathon)',
      'Documented lab procedures, network topologies, and security configurations on GitHub'
    ],
    tags: ['Azure', 'Linux', 'Entra ID', 'Terraform', 'Hackathons']
  }
];

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'email',
    name: 'Direct Email',
    command: 'mailto:faizankhanex@gmail.com',
    label: 'faizankhanex@gmail.com',
    icon: 'fa-solid fa-envelope',
    href: 'mailto:faizankhanex@gmail.com',
    external: false
  },
  {
    id: 'linkedin',
    name: 'LinkedIn Profile',
    command: 'open https://linkedin.com/in/faizan-khan-khaleel',
    label: 'faizan-khan-khaleel',
    icon: 'fab fa-linkedin',
    href: 'https://www.linkedin.com/in/faizan-khan-khaleel/',
    external: true
  },
  {
    id: 'github',
    name: 'GitHub Profile',
    command: 'open https://github.com/Faizankhan-cyber',
    label: 'Faizankhan-cyber',
    icon: 'fab fa-github',
    href: 'https://github.com/Faizankhan-cyber',
    external: true
  }
];
