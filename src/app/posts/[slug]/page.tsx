import { Post } from "@/types/mdx.types";
import path from "path";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Callout from "@/share/components/mdx-component/Callout";
import { Metadata } from "next";
import "@/styles/mdx.css";
import { Box } from "@mui/material";
import Tags from "@/component/Tags/TagsList";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { Node } from "unist";

import { Root, Element, Text } from "hast";
import { visit } from "unist-util-visit";
import PreWrapper, { PreProps } from "@/share/components/mdx-component/Pre";

interface PostPageProps {
  params: {
    slug: string;
  };
}
type CustomMDXComponents = {
  pre: React.FC<PreProps>;
};
interface ExtendedElement extends Element {
  raw?: string; // Adding the custom `raw` property
}
export const dynamicParams = true;
async function getAllPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), "content", "posts");

  if (!fs.existsSync(postsDirectory)) {
    console.error(`Directory ${postsDirectory} does not exist.`);
    return [];
  }

  const files = fs.readdirSync(postsDirectory);
  const postsPromises = files.map(async (filename) => {
    const slug = filename.replace(".mdx", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("content", "posts", filename),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    const post: Post = {
      slug,
      frontmatter: {
        title: frontmatter.title || "Untitled",
        date: frontmatter.date || "",
        description: frontmatter.description,
        published: frontmatter.published || false,
        tags: frontmatter.tags || [],
      },
      content,
    };
    return post;
  });
  return await Promise.all(postsPromises);
}

export const preProcess = () => (tree: Root) => {
  visit(tree, (node: Node) => {
    if (node?.type === "element" && (node as Element)?.tagName === "pre") {
      const [codeEl] = (node as Element).children;

      if (!codeEl || (codeEl as Element).tagName !== "code") return;
      const codeElement = codeEl as Element;
      const textNode = codeElement.children?.[0];
      if (textNode?.type === "text") {
        (node as ExtendedElement).raw = (textNode as Text).value;
      }
    }
  });
};

export const postProcess = () => (tree: Root) => {
  visit(tree, "element", (node: Node) => {
    if (node?.type === "element" && (node as Element)?.tagName === "pre") {
      (node as Element).properties["raw"] = (node as ExtendedElement).raw;
    }
  });
};

async function getPostFromParams(slug: string) {
  const posts = await getAllPosts();

  const post = posts.find((post) => post.slug === slug);
  if (!post) return null;

  return post;
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({ slug: post.slug }));

  return paths;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params.slug);

  return {
    title: `Posts | ${post?.frontmatter.title || "Untitled"}`,
    description: post?.frontmatter.description || "",
  };
}

const PostPage = async ({ params }: PostPageProps) => {
  const post = await getPostFromParams(params.slug);

  if (!post || !post.frontmatter.published) {
    notFound();
  }

  const tagList =
    post.frontmatter.tags &&
    post.frontmatter.tags.map((tag) => {
      return <Tags key={tag} tag={tag} />;
    });

  // const components:CustomMDXComponents = {
  //   pre: PreWrapper,

  // };

  return (
    <div style={{ padding: "16px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {tagList}
      </Box>
      <MDXRemote
        source={post.content || ""}
        components={{ Callout }}
        options={{
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [
              preProcess,
              rehypeSlug,
              [
                rehypePrettyCode,
                {
                  theme: "github-dark",
                },
              ],
              [
                rehypeAutolinkHeadings,
                {
                  behavior: "wrap",
                  properties: {
                    className: ["subheading-anchor"],
                    ariaLabel: "Link to section",
                  },
                },
              ],

              postProcess,
            ],
          },
        }}
      />
    </div>
  );
};

export default PostPage;
