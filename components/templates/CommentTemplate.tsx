import styled from "@emotion/styled";
import CommentForm from "../organisms/CommentForm";
import CommentCard from "../organisms/CommentCard";
import { Comment } from "@/types/dto/dataType.dto";

interface CommentTemplateProps {
  postId: number | undefined;
  comments?: Comment[];
}

export default function CommentTemplate(
  props: CommentTemplateProps
): JSX.Element {
  const { postId, comments } = props;

  return (
    <CommentTemplateStyle>
      <CommentForm postId={postId} />
      {comments?.map((comment) => {
        return <CommentCard key={comment.id} comment={comment} />;
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
