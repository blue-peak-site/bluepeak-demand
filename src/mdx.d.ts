declare module '*.mdx' {
  import type { ComponentType } from 'react';

  const MDXComponent: ComponentType;

  export const frontmatter: {
    title: string;
    slug: string;
    category: string;
    readTime: string;
    excerpt: string;
    publishedAt: string;
    seoTitle: string;
    seoDescription: string;
    ctaType?: 'audit' | 'storm';
    relatedSlugs?: string[];
  };

  export default MDXComponent;
}