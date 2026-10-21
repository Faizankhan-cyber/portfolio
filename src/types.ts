export interface StatItem {
  id: string;
  icon: string;
  count: number;
  suffix: string;
  label: string;
  code: string;
}

export interface AboutCardItem {
  id: string;
  icon: string;
  title: string;
  subtitle?: string;
  description: string;
  items?: string[];
  commandPrompt?: string;
}

export interface TechItem {
  name: string;
  status: 'hands-on' | 'learning';
  tag?: string;
  details?: string;
}

export interface TechGroup {
  id: string;
  title: string;
  groupCode: string;
  icon: string;
  description: string;
  items: TechItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  architectureNotes?: string[];
  status: 'ONLINE' | 'ACTIVE' | 'FEATURED' | 'LIVE';
  statusType: 'online' | 'active' | 'building';
  icon: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  status: 'verified' | 'in-progress';
  dateOrStatus: string;
  icon: string;
  credentialUrl?: string;
  skillsLearned?: string[];
}

export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  category: 'Cloud' | 'Security' | 'Education' | 'Hackathon';
  description: string;
  tags?: string[];
}

export interface ContactChannel {
  id: string;
  name: string;
  command: string;
  label: string;
  icon: string;
  href: string;
  external?: boolean;
}
