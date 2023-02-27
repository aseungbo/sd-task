"use client";

import { useEffect, useState } from "react";
import Detail from "@/components/templates/Detail";
import CommentTemplate from "@/components/templates/CommentTemplate";
import { axiosGetTargetPost, axiosGetComments } from "@/networks/axios.custom";
import { Post } from "@/types/dto/dataType.dto";

interface PageProps {
  params: {
    slug: number;
  };
}

export default function page(props: PageProps): JSX.Element {
  const { params } = props;
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    axiosGetTargetPost(params.slug)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
      {post && <Detail post={post} />}
      <CommentTemplate postId={params.slug} />
    </main>
  );
}
