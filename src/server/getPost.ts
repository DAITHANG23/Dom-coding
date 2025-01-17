import { Post } from "@/types/mdx.types";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
interface PostWithMDX extends Post {
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >; // Enriched with serialized MDX
}

interface PostWithMDX extends Post {
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >; // Enriched with serialized MDX
}

async function getPost(slug: string): Promise<PostWithMDX | null> {
  const postsDirectory = path.join(process.cwd(), "content", "posts");
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    console.error(`Directory ${postsDirectory} does not exist.`);
    return null;
  }

  const markdownWithMeta = fs.readFileSync(fullPath, "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);

  const mdxSource = await serialize(content, {
    // Thêm các tùy chọn serialize nếu cần
  });

  const post: PostWithMDX = {
    slug,
    frontmatter: {
      title: frontmatter.title || "Untitled",
      date: frontmatter.date || "",
      description: frontmatter.description || "",
      published: frontmatter.published || false,
      tags: frontmatter.tags || [],
    },
    mdxSource,
  };

  return post;
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content", "posts");
  const files = fs.readdirSync(postsDirectory);

  const paths = files
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const fullPath = path.join(postsDirectory, filename);
      const markdownWithMeta = fs.readFileSync(fullPath, "utf-8");
      const { data: frontmatter } = matter(markdownWithMeta);
      return {
        slug,
        frontmatter: {
          published: frontmatter.published || false,
        },
      };
    })
    .filter((post) => post.frontmatter.published)
    .map((post) => ({ slug: post.slug }));

  return paths;
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post || !post.frontmatter.published) {
    return { notFound: true };
  }

  return { props: { post } };
}
