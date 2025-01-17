export type Post = {
  slug: string;
  frontmatter: {
    title: string;
    date: Date;
    description?: string;
    published: boolean;
    tags?: string[];
  };
  content?: string;
};
