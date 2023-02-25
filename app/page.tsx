"use client";

import { useEffect, useState } from "react";
import Filter from "@/components/templates/Filter";
import Main from "@/components/templates/Main";
import { axiosGetPosts } from "@/networks/axios.custom";
import { Post } from "@/types/dto/dataType.dto";
import Pagination from "@/components/organisms/Pagination";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [viewLimit, setViewLimit] = useState<number>(10);

  useEffect(() => {
    axiosGetPosts(page, viewLimit)
      .then((response) => {
        setTotalCount(response.headers["x-total-count"]);
        setPosts(response.data);
      })
      .catch((error) => console.error(error));
  }, [page, viewLimit]);

  return (
    <main>
      <Filter viewLimit={viewLimit} setViewLimit={setViewLimit} />
      <Main posts={posts} />
      <Pagination
        totalCount={totalCount}
        page={page}
        setPage={setPage}
        viewLimit={viewLimit}
      />
    </main>
  );
}
