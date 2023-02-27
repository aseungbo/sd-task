import styled from "@emotion/styled";
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

  return (
    <CommentTemplateStyle>
      <CommentForm postId={postId} />
      {!isLoading &&
        comments.map((comment: Comment) => {
          return (
            <CommentCard key={comment.id} comment={comment} postId={postId} />
          );
        })}
    </CommentTemplateStyle>
  );
}

const CommentTemplateStyle = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  overflow-y: scroll;
  padding: 2rem;
`;
