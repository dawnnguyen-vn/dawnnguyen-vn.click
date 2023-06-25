import Link from "next/link";
import { Time } from "@/components/Time";

type PostCardProps = {
  slug: string;
  title: string;
  time: string;
  description: string;
};

export function PostCard({ slug, title, time, description }: PostCardProps) {
  return (
    <div>
      <Link href={"posts/" + slug}>
        <h3 className="w-fit mb-1 leading-5 text-lg font-medium text-primary hover:border-b-2 border-dashed border-primary">
          {title}
        </h3>
      </Link>
      <Time time={time} />
      <p>{description}</p>
    </div>
  );
}
