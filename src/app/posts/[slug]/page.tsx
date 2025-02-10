import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Callout from "@/share/components/mdx-component/Callout";
import { Metadata } from "next";
import "@/styles/mdx.css";
import { Box, Typography } from "@mui/material";
import TagsList from "@/component/Tags/TagsList";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import Calendar from "@/icons/Calendar";
import DividerComponent from "@/share/components/Divivder/Divider";
import "@/styles/component.css";
import { getAllPosts, getPostFromParams } from "@/utils/utils";
import GiscusComments from "@/component/GiscusComments/GiscusComments";
// import { Node } from "unist";

// import { Root, Element } from "hast";
// import { visit } from "unist-util-visit";
// import { PreProps } from "@/share/components/mdx-component/Pre";

interface PostPageProps {
  params: {
    slug: string;
  };
}

// type CustomMDXComponents = {
//   pre: React.FC<PreProps>;
// };
// interface ExtendedElement extends Element {
//   raw?: string; // Adding the custom `raw` property
// }
export const dynamicParams = true;

// export const preProcess = () => (tree: Root) => {
//   visit(tree, (node: Node) => {
//     if (node?.type === "element" && (node as Element)?.tagName === "pre") {
//       const [codeEl] = (node as Element).children;

//       if (!codeEl || (codeEl as Element).tagName !== "code") return;
//       const codeElement = codeEl as Element;
//       const textNode = codeElement.children?.[0];
//       if (textNode?.type === "text") {
//         (node as ExtendedElement).raw = (textNode as Text).value;
//       }
//     }
//   });
// };

// export const postProcess = () => (tree: Root) => {
//   visit(tree, "element", (node: Node) => {
//     if (node?.type === "element" && (node as Element)?.tagName === "pre") {
//       (node as Element).properties["raw"] = (node as ExtendedElement).raw;
//     }
//   });
// };

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
      return <TagsList key={tag} tag={tag} isBigSize={false} />;
    });

  // const components:CustomMDXComponents = {
  //   pre: PreWrapper,

  // };

  return (
    <div style={{ padding: "16px" }}>
      <Box>
        <Typography variant="bodyL">{post.frontmatter.title}</Typography>

        <Box
          sx={{
            display: "flex",
            gap: "8px",
            fontStyle: "italic",
            paddingBottom: "16px",
          }}
        >
          <Calendar />
          <Typography sx={{ lineHeight: 1.75 }}>
            {post.frontmatter.date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "32px",
          }}
        >
          {tagList}
        </Box>
        <DividerComponent classes={{ root: "custom-divider-class" }} />
      </Box>

      <MDXRemote
        source={post.content || ""}
        components={{ Callout }}
        options={{
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [
              // preProcess,
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

              // postProcess,
            ],
          },
        }}
      />
      <GiscusComments />
    </div>
  );
};

export default PostPage;
