import { Container } from "@/components/Container";
import { PostCard } from "@/components/PostCard";
import { getAll } from "@/utils/markdown";

export default async function Posts() {
  const contentType = "posts";
  const posts = await getAll(contentType);

  return (
    <main>
      <Container>
        <h1 className="text-3xl font-semibold mb-2">Posts</h1>
        <p className="italic">All the articles I've posted.</p>
        <div className="flex flex-col gap-6 mt-6">
          {posts.map((post) => {
            return (
              <PostCard
                slug={post.slug}
                time={post.time}
                description={post.description}
                title={post.title}
              />
            );
          })}
        </div>
      </Container>
    </main>
  );
}
