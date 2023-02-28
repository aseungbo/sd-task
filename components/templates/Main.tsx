import styled from "@emotion/styled";
import PostCard from "../organisms/PostCard";
import { Post } from "@/types/dto/dataType.dto";

interface MainProps {
  posts: Post[];
}

export default function Main(props: MainProps): JSX.Element {
  const { posts } = props;

  return (
    <MainStyle>
      {posts?.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </MainStyle>
  );
}

const MainStyle = styled.section`
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: scroll;
`;
