import styled from "@emotion/styled";
import Spinner from "../organisms/Spinner";
import DetailCard from "../organisms/DetailCard";
import { usePosts } from "@/hooks/usePosts";

interface DetailProps {
  postId: number;
}

export default function Detail(props: DetailProps): JSX.Element {
  const { posts, isLoading, isError } = usePosts({ postId: props.postId });

  if (isLoading) return <Spinner />;
  return <DetailStyle>{<DetailCard post={posts} />}</DetailStyle>;
}

const DetailStyle = styled.section`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
