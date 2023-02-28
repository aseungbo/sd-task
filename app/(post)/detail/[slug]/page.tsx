"use client";

import Detail from "@/components/templates/Detail";
import CommentTemplate from "@/components/templates/CommentTemplate";

interface PageProps {
  params: {
    slug: number;
  };
}

export default function page(props: PageProps): JSX.Element {
  return (
    <main>
      <Detail postId={props.params.slug} />
      <CommentTemplate postId={props.params.slug} />
    </main>
  );
}
