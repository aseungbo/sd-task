import styled from "@emotion/styled";
import { Post, Comment } from "@/types/dto/dataType.dto";
import PostCard from "../organisms/PostCard";

interface MainProps {
  posts?: Post[];
  comments?: Comment[];
}

export default function Main(props: MainProps): JSX.Element {
  const { posts, comments } = props;

  return (
    <MainStyle>
      {posts?.map((post, idx) => {
        if (idx >= 10) return;
        const commentsCnt = comments?.filter(
          (comment) => comment.postId === post.id
        ).length;
        return <PostCard key={post.id} post={post} commentsCnt={commentsCnt} />;
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
