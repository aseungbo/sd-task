import styled from "@emotion/styled";
import PostCard from "../organisms/PostCard";
import { Post } from "@/types/dto/dataType.dto";

interface MainProps {
  posts?: Post[];
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
  background-color: #fdfdfd;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  overflow-y: scroll;
  padding: 2rem;
`;
