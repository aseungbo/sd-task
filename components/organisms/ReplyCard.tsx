import styled from "@emotion/styled";
import { useState } from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import { Comment } from "@/types/dto/dataType.dto";
import BaseButton from "../atoms/buttons/BaseButton";
import { useComments } from "@/hooks/useComments";
import Spinner from "./Spinner";

interface ReplyCardProps {
  commentId: number;
  postId: number;
}

export default function ReplyCard(props: ReplyCardProps): JSX.Element {
  const { commentId, postId } = props;
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  const [isWrite, setIsWrite] = useState<boolean>(false);

  const { comments, isLoading, isError } = useComments(postId, commentId);

  if (isLoading) return <Spinner />;

  return (
    <>
      <BaseButton
        theme="reply"
        value={isDisplay ? "▼ 숨기기" : "▶ 답글"}
        handleClick={() => setIsDisplay((state) => !state)}
      />
      {isDisplay && (
        <ReplyCardStyle>
          {comments?.map((comment: Comment) => {
            return (
              <ChildStyle key={comment.id}>
                <CommentCard comment={comment} postId={postId} />
                <ReplyCard commentId={comment.id} postId={postId} />
              </ChildStyle>
            );
          })}
          {isWrite || comments?.length === 0 ? (
            <CommentForm postId={postId} parent={commentId} />
          ) : (
            <BaseButton
              theme="contained"
              value="답글 작성하기"
              handleClick={() => setIsWrite((state) => !state)}
            />
          )}
        </ReplyCardStyle>
      )}
    </>
  );
}

const ReplyCardStyle = styled.div`
  gap: 1rem;
  border-radius: 0.5rem;
  background-color: #fbfbfb;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChildStyle = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;
