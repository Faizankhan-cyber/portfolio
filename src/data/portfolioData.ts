import {
  StatItem,
  AboutCardItem,
  TechGroup,
  ProjectItem,
  CertificationItem,
  JourneyMilestone,
  ContactChannel
} from '../types';

export const PERSONAL_INFO = {
  name: 'Faizan Khan',
  terminalUser: 'root@FaizanKhan',
  systemStatus: 'SYSTEM.STATUS: ONLINE',
  role: 'Cloud Security & Infrastructure',
  subRole: 'Cloud Computing & Cybersecurity Student',
  badge: 'SECURITY OPERATIONS PORTFOLIO',
  bio: 'Building secure cloud systems through hands-on projects and practical labs. BCA student passionate about cloud architecture, network security, and infrastructure automation.',
  location: 'Bengaluru, Karnataka, India',
  email: 'faizankhanex@gmail.com',
  github: 'https://github.com/Faizankhank-cy',
  githubSecondary: 'https://github.com/Faizankhan-cyber',
  linkedin: 'https://www.linkedin.com/in/faizan-khan-khaleel/',
  technicalTags: [
    'CLOUD SECURITY',
    'AZURE INFRA',
    'PYTHON AUTOMATION'
  ],
  terminalBootSequence: [
    { text: 'system.boot()', delay: 100 },
    { text: 'initializing cloud_modules...', delay: 400 },
    { text: 'identity: cloud_security_student', delay: 800 },
    { text: 'target_stack: [azure, linux, python]', delay: 1200 },
    { text: 'security_checks: active', delay: 1600 },
    { text: 'establishing secure connection...', delay: 2000 },
    { text: 'root@faizan:~# ready for mission directives', delay: 2400 }
  ]
};

export const STATS: StatItem[] = [
  { id: 'projects', icon: 'fa-solid fa-code', count: 4, suffix: '', label: 'Featured Projects', code: 'PROJ_COUNT: 04' },
  { id: 'certifications', icon: 'fa-solid fa-certificate', count: 5, suffix: '', label: 'Verified Credentials', code: 'CERT_VERIFIED: 05' },
  { id: 'repositories', icon: 'fa-solid fa-code-branch', count: 15, suffix: '+', label: 'Cloud & Code Repos', code: 'GIT_REPOS: 15+' },
  { id: 'hackathons', icon: 'fa-solid fa-trophy', count: 2, suffix: '', label: 'Hackathons Attended', code: 'HACK_EXP: 02' }
];

export const ABOUT_CARDS: AboutCardItem[] = [
  {
    id: 'identity',
    icon: 'fa-solid fa-terminal',
    title: 'Student Identity',
    subtitle: 'ACADEMIC & SECURITY FOCUS',
    description: 'BCA student specialized in Cloud Computing & Cybersecurity at Bengaluru. Driven by deep curiosity in cloud isolation, defensive networking, and practical system security.',
    commandPrompt: 'cat identity.txt'
  },
  {
    id: 'education',
    icon: 'fa-solid fa-graduation-cap',
    title: 'Education & Honors',
    subtitle: 'DEGREE & DIPLOMA',
    description: 'Pursuing Bachelor of Computer Applications with an Advanced Diploma in Cloud Architecture & Cybersecurity. Grounded in computational fundamentals and practical lab exercises.',
    items: [
      'Bachelor of Computer Applications (BCA)',
      'Advanced Diploma in Cloud Architecture & Cybersecurity'
    ],
    commandPrompt: 'ls -l /education/credentials'
  },
  {
    id: 'approach',
    icon: 'fa-solid fa-shield-halved',
    title: 'Hands-on Philosophy',
    subtitle: 'LABS OVER THEORY',
    description: 'Belief that real security competence comes from building and testing infrastructure. From deploying locked-down Azure VNets to scripting socket scanners and Linux hardening.',
    items: [
      'Zero-Trust networking mindset',
      'Defensive automation with Python',
      'Infrastructure as code exploration'
    ],
    commandPrompt: 'cat security_creed.md'
  },
  {
    id: 'location',
    icon: 'fa-solid fa-server',
    title: 'Operations Hub',
    subtitle: 'LOCATION & READINESS',
    description: 'Stationed in Bengaluru, Karnataka — India’s primary technology capital. Actively seeking cloud security internships and collaborative engineering opportunities.',
    commandPrompt: 'traceroute host.bengaluru.in'
  }
];

export const TECH_GROUPS: TechGroup[] = [
  {
    id: 'cloud',
    title: 'Cloud Infrastructure',
    groupCode: 'MOD_CLOUD',
    icon: 'fa-solid fa-cloud',
    description: 'Enterprise cloud networking, virtualization, and identity management.',
    items: [
      { name: 'Microsoft Azure', status: 'hands-on', tag: 'Core', details: 'VNets, Subnets, NSG Rules, Azure VMs, Cloud Shell, Blob Storage' },
      { name: 'Azure Virtual Networks (VNet)', status: 'hands-on', tag: 'Network', details: 'CIDR subnet planning, network isolation, peering' },
      { name: 'Network Security Groups (NSG)', status: 'hands-on', tag: 'Firewall', details: 'Inbound/outbound rule configuration, port lockdown' },
      { name: 'Azure Identity & Access (RBAC)', status: 'hands-on', tag: 'IAM', details: 'Role assignments, least privilege governance' },
      { name: 'AWS Basics', status: 'hands-on', tag: 'Labs', details: 'Foundational EC2, S3 bucket policies, IAM' },
      { name: 'Terraform', status: 'learning', tag: 'IaC Study', details: 'Exploring declarative infrastructure automation' }
    ]
  },
  {
    id: 'security',
    title: 'Cybersecurity & Defense',
    groupCode: 'MOD_SEC',
    icon: 'fa-solid fa-shield-halved',
    description: 'Security fundamentals, reconnaissance, traffic auditing, and defensive postures.',
    items: [
      { name: 'Network Security', status: 'hands-on', tag: 'Core', details: 'TCP/IP protocol stack, packet flow, firewall filtering' },
      { name: 'Reconnaissance & Port Scanning', status: 'hands-on', tag: 'Defense', details: 'Socket scanning, service banner detection' },
      { name: 'Identity & Access Management', status: 'hands-on', tag: 'IAM', details: 'Authentication, authorization, SSH key pairs' },
      { name: 'Hands-on Labs (TryHackMe)', status: 'hands-on', tag: 'Pre-Sec', details: 'Web application security, cryptography basics' },
      { name: 'Threat Telemetry', status: 'hands-on', tag: 'ThreatLens', details: 'Security log evaluation, threat indicator analysis' },
      { name: 'CompTIA Security+ Domains', status: 'learning', tag: 'Exam Prep', details: 'Threat analysis, risk mitigation, cryptography' }
    ]
  },
  {
    id: 'development',
    title: 'Development & Automation',
    groupCode: 'MOD_DEV',
    icon: 'fa-solid fa-code',
    description: 'Writing software to automate tasks, build backend services, and inspect networks.',
    items: [
      { name: 'Python', status: 'hands-on', tag: 'Primary', details: 'Socket programming, automation scripts, data handling' },
      { name: 'Bash & Shell Scripting', status: 'hands-on', tag: 'Linux', details: 'System automation, cron tasks, log parsing' },
      { name: 'JavaScript & Node.js', status: 'hands-on', tag: 'Backend', details: 'Express REST APIs, hackathon microservices' },
      { name: 'SQL', status: 'hands-on', tag: 'Data', details: 'Relational queries, SQLite integration, Oracle SQL' }
    ]
  },
  {
    id: 'systems',
    title: 'Systems & Engineering Tools',
    groupCode: 'MOD_SYS',
    icon: 'fa-brands fa-linux',
    description: 'Operating systems, source control, and engineering environments.',
    items: [
      { name: 'Linux (Ubuntu / Debian)', status: 'hands-on', tag: 'OS', details: 'File permissions, systemctl, user administration, networking' },
      { name: 'Git & GitHub', status: 'hands-on', tag: 'VCS', details: 'Branching, code reviews, open-source workflow' },
      { name: 'VS Code & Cloud Shell', status: 'hands-on', tag: 'IDE', details: 'Primary coding environment and Azure CLI' },
      { name: 'SSH & Key Pair Governance', status: 'hands-on', tag: 'Admin', details: 'Public-key authentication, tunneling, remote servers' }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'azure-infra',
    title: 'Azure Enterprise Infrastructure',
    subtitle: 'VNet Architecture & Hardened Linux Web Server',
    description: 'Designed and deployed an enterprise-grade cloud infrastructure on Microsoft Azure. Created isolated Virtual Networks with private/public subnet separation, configured Network Security Group (NSG) ingress/egress rules, provisioned an Ubuntu Linux server with SSH key authentication, and deployed Nginx for secure web service delivery.',
    architectureNotes: [
      'Azure Virtual Network (VNet) with segmented subnets',
      'NSG perimeter firewall locking down non-essential ports',
      'Passwordless SSH key pair authentication on Ubuntu VM',
      'Nginx web server setup with secure reverse proxy headers'
    ],
    status: 'FEATURED',
    statusType: 'online',
    icon: 'fa-solid fa-cloud',
    tags: ['Azure', 'VNet', 'NSG', 'Ubuntu VM', 'SSH', 'Nginx', 'Linux'],
    githubUrl: 'https://github.com/Faizankhank-cy/azure-enterprise-infrastructure',
    highlights: ['Production-style network isolation', 'Zero-trust port restriction']
  },
  {
    id: 'threatlens',
    title: 'ThreatLens',
    subtitle: 'Security Telemetry & Threat Reconnaissance Dashboard',
    description: 'Security dashboard platform engineered for visual threat intelligence and vulnerability analysis. Provides interactive telemetry tracking, security indicator visualization, and attack surface assessment to help engineers monitor risk metrics and security events in real-time.',
    architectureNotes: [
      'Interactive risk indicator cards and alert telemetry feeds',
      'REST API integration with structured vulnerability data',
      'Responsive dark cyber-interface for SOC and analyst workflows'
    ],
    status: 'LIVE',
    statusType: 'online',
    icon: 'fa-solid fa-shield-halved',
    tags: ['Python', 'Threat Analysis', 'React', 'REST API', 'Security Telemetry'],
    githubUrl: 'https://github.com/Faizankhank-cy/ThreatLens',
    liveUrl: 'https://threatlens-project.vercel.app/',
    highlights: ['Live interactive demo available', 'Telemetry & vulnerability tracking']
  },
  {
    id: 'bountyvault',
    title: 'BountyVault',
    subtitle: 'Blockchain Bounty Management Platform',
    description: 'Decentralized bounty escrow and developer reward platform developed during the AlgoBharat × Algorand Foundation India Hackathon. Served as Backend Lead, designing secure server-side APIs, managing SQLite data persistence, and coordinating Algorand blockchain transaction flows.',
    architectureNotes: [
      'Backend architecture with Node.js, Express, and Python',
      'Algorand blockchain smart contract transaction coordination',
      'Pera Wallet integration and cryptographic verification'
    ],
    status: 'ACTIVE',
    statusType: 'active',
    icon: 'fa-solid fa-link',
    tags: ['Algorand', 'Python', 'Node.js', 'Express', 'SQLite', 'Blockchain'],
    githubUrl: 'https://github.com/Faizankhan-cyber',
    highlights: ['National Hackathon project', 'Backend Lead role']
  },
  {
    id: 'port-scanner',
    title: 'Python Port Scanner',
    subtitle: 'Multi-Target TCP Reconnaissance Utility',
    description: 'Custom network reconnaissance tool built in Python using low-level socket programming. Scans target IP addresses for open TCP ports, measures handshake latency, captures service banners, and demonstrates foundational understanding of transport-layer protocols.',
    architectureNotes: [
      'Raw socket connections with dynamic timeout handling',
      'Service banner grabber for HTTP, SSH, and SMTP detection',
      'Clean CLI output with organized port status tables'
    ],
    status: 'ONLINE',
    statusType: 'online',
    icon: 'fa-solid fa-network-wired',
    tags: ['Python', 'Sockets', 'TCP/IP', 'Networking', 'Reconnaissance'],
    githubUrl: 'https://github.com/Faizankhan-cyber/python-port-scanner',
    highlights: ['Built from scratch with Python sockets', 'Hands-on network reconnaissance']
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cisco-cyber',
    issuer: 'Cisco Networking Academy',
    title: 'Introduction to Cybersecurity',
    status: 'verified',
    dateOrStatus: 'Earned 2025',
    icon: 'fa-solid fa-shield-halved',
    skillsLearned: ['Cybersecurity fundamentals', 'Threat vectors & malware', 'Defense-in-depth']
  },
  {
    id: 'tryhackme',
    issuer: 'TryHackMe',
    title: 'Pre Security Path',
    status: 'verified',
    dateOrStatus: 'Earned 2026',
    icon: 'fa-solid fa-terminal',
    skillsLearned: ['Network fundamentals & OSI', 'Linux CLI mastery', 'Web application security basics']
  },
  {
    id: 'deloitte-sim',
    issuer: 'Deloitte',
    title: 'Cyber Job Simulation',
    status: 'verified',
    dateOrStatus: 'Completed 2026',
    icon: 'fa-solid fa-user-shield',
    skillsLearned: ['Security advisory simulation', 'Cloud incident response', 'Risk assessment reporting']
  },
  {
    id: 'abstream-cloud',
    issuer: 'Abstream Technologies',
    title: 'Introduction to Cloud Computing',
    status: 'verified',
    dateOrStatus: 'Completed 2025',
    icon: 'fa-solid fa-cloud',
    skillsLearned: ['IaaS, PaaS, SaaS paradigms', 'Cloud storage & virtualization', 'Identity governance']
  },
  {
    id: 'abstream-linux',
    issuer: 'Abstream Technologies',
    title: 'Linux System Engineering',
    status: 'verified',
    dateOrStatus: 'Completed 2025',
    icon: 'fa-brands fa-linux',
    skillsLearned: ['Linux system administration', 'Permissions & ownership', 'Bash scripting & networking']
  }
];

export const LEARNING_PATHS = [
  {
    id: 'az-900',
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    provider: 'Microsoft Learn / Active Preparation',
    status: 'In Progress (Active Study)',
    progress: 'Exam Preparation',
    topics: ['Cloud Concepts', 'Azure Architecture & Services', 'Azure Management & Governance']
  },
  {
    id: 'sec-plus',
    title: 'CompTIA Security+ Curriculum',
    provider: 'Self-Paced / Guided Labs',
    status: 'In Progress (Curriculum Study)',
    progress: 'Domain Review',
    topics: ['Threats, Attacks & Vulnerabilities', 'Architecture & Design', 'Implementation & Operations']
  },
  {
    id: 'terraform-iac',
    title: 'Infrastructure as Code with Terraform',
    provider: 'HashiCorp Tutorials & Azure Labs',
    status: 'In Progress (Exploratory)',
    progress: 'Foundations',
    topics: ['HCL Syntax', 'Terraform State Management', 'Azure Resource Group Provisioning']
  }
];

export const TIMELINE: JourneyMilestone[] = [
  {
    id: 'j-1',
    year: '2025',
    category: 'Cloud',
    title: 'Cloud Computing Foundations',
    description: 'Completed cloud fundamentals and architecture fundamentals training with Abstream Technologies, exploring virtualization and cloud storage models.',
    tags: ['Cloud', 'Abstream']
  },
  {
    id: 'j-2',
    year: '2025',
    category: 'Security',
    title: 'Linux System Engineering Mastery',
    description: 'Deepened hands-on Linux system administration, shell command mastery, file hierarchy permissions, systemctl processes, and networking fundamentals.',
    tags: ['Linux', 'Ubuntu', 'Bash']
  },
  {
    id: 'j-3',
    year: '2025',
    category: 'Security',
    title: 'Cisco Cybersecurity Certification',
    description: 'Earned Introduction to Cybersecurity from Cisco, developing strong grounding in attack methodologies, encryption primitives, and threat defense.',
    tags: ['Cisco', 'Security']
  },
  {
    id: 'j-4',
    year: '2026',
    category: 'Security',
    title: 'TryHackMe Pre Security & Deloitte Simulation',
    description: 'Completed the hands-on TryHackMe Pre Security learning path and finished the Deloitte Cyber Job Simulation solving simulated enterprise security tasks.',
    tags: ['TryHackMe', 'Deloitte']
  },
  {
    id: 'j-5',
    year: '2026',
    category: 'Hackathon',
    title: 'BountyVault Hackathon (Backend Lead)',
    description: 'Collaborated as Backend Lead for BountyVault during AlgoBharat × Algorand Foundation India Hackathon, deploying APIs and blockchain escrow logic.',
    tags: ['Algorand', 'Python', 'Node.js']
  },
  {
    id: 'j-6',
    year: '2026',
    category: 'Cloud',
    title: 'Azure Infrastructure & ThreatLens Projects',
    description: 'Designed Azure Enterprise Infrastructure with VNet segregation & NSGs, followed by engineering the ThreatLens security telemetry platform.',
    tags: ['Azure', 'ThreatLens', 'VNet']
  },
  {
    id: 'j-7',
    year: 'Present',
    category: 'Education',
    title: 'BCA in Cloud Computing & Cybersecurity',
    description: 'Continuing BCA degree studies with an Advanced Diploma in Cloud Architecture & Cybersecurity while preparing for AZ-900 certification.',
    tags: ['BCA', 'Bengaluru', 'AZ-900 Prep']
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
    command: 'open /in/faizan-khan-khaleel',
    label: 'faizan-khan-khaleel',
    icon: 'fab fa-linkedin',
    href: 'https://www.linkedin.com/in/faizan-khan-khaleel/',
    external: true
  },
  {
    id: 'github',
    name: 'GitHub Repository Profile',
    command: 'git remote -v Faizankhank-cy',
    label: 'Faizankhank-cy (Main)',
    icon: 'fab fa-github',
    href: 'https://github.com/Faizankhank-cy',
    external: true
  },
  {
    id: 'github-secondary',
    name: 'GitHub Secondary Profile',
    command: 'git remote -v Faizankhan-cyber',
    label: 'Faizankhan-cyber',
    icon: 'fab fa-github',
    href: 'https://github.com/Faizankhan-cyber',
    external: true
  }
];
