"use client";

import { useEffect, useState } from "react";
import Main from "@/components/templates/Main";
import { axiosGetPosts } from "@/networks/axios.custom";
import { Post, Comment } from "@/types/dto/dataType.dto";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>();
  const [comments, setComments] = useState<Comment[]>();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  useEffect(() => {
    axiosGetPosts(page, limit)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.error(error));
  }, [page, limit]);

  return (
    <main>
      <Main posts={posts} />
    </main>
  );
}
