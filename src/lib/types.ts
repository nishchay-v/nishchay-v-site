import { LucideProps } from 'lucide-react';
import { ReactNode } from 'react';

export interface Section {
  title: string;
  key: string;
  content: string | ContentItem[];
}

export interface ContentItem {
  title: string;
  company?: string;
  duration?: string;
  description: ReactNode;
  url: string;
  urlText?: string;
  icon?: React.ComponentType<LucideProps>;
  imageUrl?: string;
}

export interface ContactLink {
  title: string;
  url: string;
  imageUrl: string;
}
