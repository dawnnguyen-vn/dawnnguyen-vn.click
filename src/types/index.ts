import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type ContentType = "posts" | "projects";

export type PostMeta = {
  title: string;
  time: string;
  description: string;
};

export type Post = {
  slug: string;
  title: string;
  time: string;
  description: string;
  content: MDXRemoteSerializeResult<"frontmatter", PostMeta>;
};
