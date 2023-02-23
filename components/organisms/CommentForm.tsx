import styled from "@emotion/styled";
import { useState } from "react";
import InputInstance from "../atoms/inputs/InputInstance";
import { axiosPostComment } from "@/networks/axios.custom";
import { Comment } from "@/types/dto/dataType.dto";

interface CommentFormProps {
  postId: number | undefined;
}

/**
 * TODO
 * - 댓글번호를 순차적으로 POST 하는 방법
 * @returns
 */
export default function CommentForm(props: CommentFormProps): JSX.Element {
  const { postId } = props;
  const [newComment, setNewComment] = useState<Object>({});

  const handleChange = (e: any): void => {
    const value = e.target.value;
    setNewComment((prev) => ({
      ...prev,
      // id:
      postId: postId,
      parrent: null,
      content: value,
      writer: null,
      password: "string",
      // created_at: string; // 작성일자: ISO 8601
      updated_at: "string",
    }));
  };

  const handleClick = (): void => {
    if (newComment)
      axiosPostComment(newComment)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
  };

  return (
    <CommentFormStyle>
      <TextAreaStyle placeholder="댓글을 입력하세요" onChange={handleChange} />
      <ButtonStyle>
        <button onClick={handleClick}>작성하기</button>
      </ButtonStyle>
    </CommentFormStyle>
  );
}

const CommentFormStyle = styled.div`
  width: 20rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const TextAreaStyle = styled.textarea`
  padding: 1rem;
  outline: none;
  resize: none;
  border: 1px solid lightgray;
  border-radius: 0.25rem;
  min-height: 4rem;
  font-size: 1rem;
`;

const ButtonStyle = styled.div`
  height: 1rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
