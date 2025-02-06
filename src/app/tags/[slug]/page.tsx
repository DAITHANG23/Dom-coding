import PostItem from "@/component/PostItem/PostItem";
import { Typography } from "@mui/material";
import { getAllPosts, getPostsFromParams } from "@/utils/utils";
import { Metadata } from "next";

interface TagItemProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: TagItemProps): Promise<Metadata> {
  return {
    title: `Tag: ${params.slug || "Untitled"} | DomCoding`,
    description: params.slug || "",
  };
}

export async function generateStaticParams(): Promise<
  TagItemProps["params"][]
> {
  const posts = await getAllPosts();
  const allTags = new Set(posts.flatMap((post) => post.frontmatter.tags || []));

  return Array.from(allTags).map((tag) => ({ slug: tag }));
}

const TagItem = async ({ params }: TagItemProps) => {
  const postsList = await getPostsFromParams(params.slug);

  return (
    <div style={{ height: "100vh", padding: "16px" }}>
      <Typography variant="bodyL">Tag: {params.slug}</Typography>
      {postsList.map((post) => {
        return (
          <PostItem
            title={post.frontmatter.title}
            description={post.frontmatter.description || ""}
            date={post.frontmatter.date}
            slug={post.slug}
            key={post.slug}
          />
        );
      })}
    </div>
  );
};

export default TagItem;
