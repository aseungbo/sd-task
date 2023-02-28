import styled from "@emotion/styled";
import Spinner from "../organisms/Spinner";
import CommentForm from "../organisms/CommentForm";
import CommentCard from "../organisms/CommentCard";
import { useComments } from "@/hooks/useComments";
import { Comment } from "@/types/dto/dataType.dto";
import ReplyCard from "../organisms/ReplyCard";

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
      <CommentForm postId={postId} />
      {comments
        .filter((comment: Comment) => comment.parent === null)
        .map((comment: Comment) => {
          return (
            <CommentDivStyle key={comment.id}>
              <CommentCard comment={comment} postId={postId} />
              <ReplyCard commentId={comment.id} postId={postId} />
            </CommentDivStyle>
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

const CommentDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
