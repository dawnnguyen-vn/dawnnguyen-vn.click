"use client";

import { PostMeta } from "@/types";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { H2 } from "@/components/H2";
import { H3 } from "@/components/H3";
import { TableOfContents } from "../TableOfContents";

const components = {
  h2: H2,
  h3: H3,
  ol: TableOfContents,
};

export function Markdown({
  source,
}: {
  source: MDXRemoteSerializeResult<"frontmatter", PostMeta>;
}) {
  return (
    <div className="mt-8">
      <MDXRemote {...source} components={{ ...components }} />
    </div>
  );
}
