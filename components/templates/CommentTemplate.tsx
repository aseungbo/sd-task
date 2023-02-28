import styled from "@emotion/styled";
import Spinner from "../organisms/Spinner";
import CommentForm from "../organisms/CommentForm";
import CommentCard from "../organisms/CommentCard";
import { useComments } from "@/hooks/useComments";
import { Comment } from "@/types/dto/dataType.dto";

interface CommentTemplateProps {
  postId: number;
}

export default function CommentTemplate(
  props: CommentTemplateProps
): JSX.Element {
  const { postId } = props;
  const { comments, isLoading, isError } = useComments(postId);

  if (isLoading) return <Spinner />;
  return (
    <CommentTemplateStyle>
      <CommentForm postId={postId} commentsLength={comments.length} />
      {comments.map((comment: Comment) => {
        return (
          <CommentCard key={comment.id} comment={comment} postId={postId} />
        );
      })}
    </CommentTemplateStyle>
  );
}

const CommentTemplateStyle = styled.section`
  gap: 3rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
