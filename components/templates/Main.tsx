import styled from "@emotion/styled";
import { useState } from "react";
import Filter from "../organisms/Filter";
import PostCard from "../organisms/PostCard";
import Spinner from "../organisms/Spinner";
import Pagination from "../organisms/Pagination";
import { usePosts } from "@/hooks/usePosts";
import { Post } from "@/types/dto/dataType.dto";

export default function Main(): JSX.Element {
  const [page, setPage] = useState<number>(1);
  const [viewLimit, setViewLimit] = useState<number>(10);
  const { posts, totalCount, isLoading, isError } = usePosts({
    page: page,
    viewLimit: viewLimit,
  });

  if (isLoading) return <Spinner />;
  return (
    <MainStyle>
      <Filter viewLimit={viewLimit} setViewLimit={setViewLimit} />
      <PostCardStyle>
        {posts?.map((post: Post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </PostCardStyle>
      <Pagination
        page={page}
        maxPage={Math.ceil(totalCount / viewLimit)}
        setPage={setPage}
      />
    </MainStyle>
  );
}

const MainStyle = styled.section`
  padding: 1rem 2rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

const PostCardStyle = styled.div`
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: scroll;
`;
