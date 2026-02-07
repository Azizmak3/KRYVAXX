
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface InfrastructurePillar {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface CaseStudy {
  title: string;
  niche: string;
  result: string;
  image: string;
}