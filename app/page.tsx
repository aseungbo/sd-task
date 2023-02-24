"use client";

import { useEffect, useState } from "react";
import Filter from "@/components/templates/Filter";
import Main from "@/components/templates/Main";
import { axiosGetPosts } from "@/networks/axios.custom";
import { Post, Comment } from "@/types/dto/dataType.dto";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>();
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
      <Filter limit={limit} setLimit={setLimit} />
      <Main posts={posts} />
    </main>
  );
}
