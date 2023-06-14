import { ContentType, Post, PostMeta } from "@/types";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";

export const getAll = async (contentType: ContentType) => {
  const posts: Post[] = [];
  const postsDir = `public/content/${contentType}`;
  const fileNames = fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".mdx"));
  for (let i = 0; i < fileNames.length; i++) {
    const path = postsDir + "/" + fileNames[i];
    const post = await convertFileToObject(path);
    post.slug = post.slug;
    posts.push(post);
  }

  return posts;
};

export async function get(contentType: ContentType, slug: string) {
  const path = `public/content/${contentType}/${slug}.mdx`;
  const post = await convertFileToObject(path);

  return post;
}

const convertFileToObject = async (path: string) => {
  const fileData = fs.readFileSync(path, "utf8");
  const slug = path.split("/").slice(-1)[0].replace(".mdx", "");
  const object = await serialize<"frontmatter", PostMeta>(fileData, {
    parseFrontmatter: true,

    mdxOptions: {
      rehypePlugins: [rehypeCodeTitles, rehypePrism],
    },
  });

  const result: Post = {
    slug,
    ...object.frontmatter,
    content: object,
  };
  return result;
};
