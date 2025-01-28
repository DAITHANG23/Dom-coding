import PostItem from "@/component/PostItem/PostItem";
import { Typography } from "@mui/material";
import { getAllPosts } from "@/utils/utils";

interface TagItemProps {
  params: {
    slug: string;
  };
}

async function getPostsFromParams(slug: string) {
  const posts = await getAllPosts();

  const postsList = posts.filter((post) =>
    post.frontmatter.tags?.some((item) => item === slug)
  );

  if (!postsList) return [];

  return postsList;
}

export async function generateStaticParams(): Promise<
  TagItemProps["params"][]
> {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({ slug: post.slug }));

  return paths;
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
