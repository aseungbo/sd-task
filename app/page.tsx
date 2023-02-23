"use client";

import { useEffect, useState } from "react";
import Main from "@/components/templates/Main";
import { axiosGetComments, axiosGetPosts } from "@/networks/axios.custom";
import { Post, Comment } from "@/types/dto/dataType.dto";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>();
  const [comments, setComments] = useState<Comment[]>();
  // const [page, setPage] = useState<number>(1);
  // const [viewCount, setViewCount] = useState<number>(10);

  useEffect(() => {
    axiosGetPosts()
      .then((response) => {
        setPosts(response.data);
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
      <Main posts={posts} comments={comments} />
    </main>
  );
}
