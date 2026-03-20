export type BlogFrontmatter = {
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

export type BlogPostModule = {
  default: React.ComponentType;
  frontmatter: BlogFrontmatter;
};

type BlogPost = BlogFrontmatter & {
  Content: React.ComponentType;
};

const postModules = import.meta.glob('../content/insights/*.mdx', {
  eager: true,
}) as Record<string, BlogPostModule>;

export function getAllPosts(): BlogPost[] {
  return Object.values(postModules)
    .map((mod) => ({
      ...mod.frontmatter,
      Content: mod.default,
    }))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}