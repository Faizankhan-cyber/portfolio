export interface StatItem {
  id: string;
  icon: string;
  value: string;
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

export interface SkillItem {
  name: string;
  context?: string;
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  groupCode: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectVersionItem {
  version: string;
  title: string;
  certTrack: string;
  status: 'Completed' | 'Planned';
  releaseTag?: string;
  releaseUrl?: string;
  summary: string;
  highlights: string[];
}

export interface ProjectSecondaryLink {
  label: string;
  url: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  category: 'azure' | 'hackathon';
  title: string;
  subtitle: string;
  description: string;
  keyHighlights: string[];
  status: 'DEPLOYED LAB' | 'HACKATHON BUILD' | 'LIVE DEMO' | 'STANDALONE LAB' | 'V2.0.0 RELEASED';
  isProminent?: boolean;
  isFeatured?: boolean;
  featuredLabel?: string;
  contextNote?: string;
  lifecycleNote?: string;
  versions?: ProjectVersionItem[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  secondaryLinks?: ProjectSecondaryLink[];
  eventContext?: string;
}

export interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  examCode?: string;
  type: 'Course Certificate' | 'Learning Path' | 'Job Simulation' | 'Certification';
  verificationStatus: 'Completed & Earned' | 'Course Completed' | 'Simulation Completed' | 'Curriculum Study / Flagged for Review';
  isFeatured?: boolean;
  isFlaggedForReview?: boolean;
  topics?: string[];
  credentialUrl?: string;
  credentialId?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: 'Community' | 'Independent';
  description: string;
  points: string[];
  tags: string[];
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
