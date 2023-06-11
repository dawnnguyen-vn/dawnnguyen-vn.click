import { Markdown } from "@/components/Markdown";
import { Container } from "@/components/Container";
import { Time } from "@/components/Time";
import { getAll, get } from "@/utils/markdown";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateStaticParams() {
  const posts = await getAll("posts");

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function SinglePost({ params }: Params) {
  const { slug } = params;
  const post = await get("posts", slug);
  return (
    <main className="single-post">
      <Container>
        <h1 className="text-2xl text-primary font-semibold mb-2">
          {post.title}
        </h1>
        <Time time={post.time} size={16} />
        <Markdown source={post.content} />
      </Container>
    </main>
  );
}
