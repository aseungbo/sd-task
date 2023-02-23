import styled from "@emotion/styled";
import { Comment } from "@/types/dto/dataType.dto";

interface CommentCardProps {
  comment: Comment;
}

export default function CommentCard(props: CommentCardProps): JSX.Element {
  const { comment } = props;

  return (
    <CommentCardStyle>
      <HeadStyle>
        <span>{comment.writer}</span>
        <HeadButtonStyle>
          {/* <button>수정</button>
          <button>삭제</button> */}
        </HeadButtonStyle>
      </HeadStyle>
      <ContentStyle>{comment.content}</ContentStyle>
    </CommentCardStyle>
  );
}

const CommentCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
`;

const HeadStyle = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
`;

const HeadButtonStyle = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ContentStyle = styled.div``;
