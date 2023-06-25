import { Container } from "@/components/Container";
import { PostCard } from "@/components/PostCard";
import { Separate } from "@/components/Separate";
import { SocialBlock } from "@/components/SocialBlock";
import { getAll } from "@/utils/markdown";

export default async function Home() {
  const posts = await getAll("posts");
  return (
    <main>
      <Container>
        <div className="md:mt-16 mt-10">
          <p className="md:text-5xl text-3xl font-bold">Hello World!</p>
          <p className="md:mt-9 mt-5">
            AstroPaper is a minimal, responsive, accessible and SEO-friendly
            Astro blog theme. This theme follows best practices and provides
            accessibility out of the box. Light and dark mode are supported by
            default. Moreover, additional color schemes can also be configured.
            Read the blog posts or check README for more info.
          </p>
          <div className="flex gap-3 items-center mt-4 mb-6">
            <p>Social Links:</p>
            <SocialBlock />
          </div>
          <Separate />
        </div>
        <div>
          <div className="mt-10">
            <h1 className="text-2xl font-semibold mb-2">Recent Posts</h1>
            <div className="flex flex-col gap-6 mt-6">
              {posts.map((post) => {
                return (
                  <PostCard
                    key={post.slug}
                    slug={post.slug}
                    time={post.time}
                    description={post.description}
                    title={post.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
