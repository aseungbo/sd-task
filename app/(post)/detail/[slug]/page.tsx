"use client";

import { useEffect, useState } from "react";
import Detail from "@/components/templates/Detail";
import CommentTemplate from "@/components/templates/CommentTemplate";
import { axiosGetPosts, axiosGetComments } from "@/networks/axios.custom";
import { Post, Comment } from "@/types/dto/dataType.dto";

interface PageProps {
  params: {
    slug: number;
  };
}

export default function page(props: PageProps): JSX.Element {
  const { params } = props;
  const [post, setPost] = useState<Post>();
  const [comments, setComments] = useState<Comment[]>();

  useEffect(() => {
    axiosGetPosts(params.slug)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    axiosGetComments()
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
      <Detail post={post} />
      <CommentTemplate
        comments={comments?.filter((comment) => comment.postId === post?.id)}
      />
    </main>
  );
}
