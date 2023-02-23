import styled from "@emotion/styled";
import { useState } from "react";
import { axiosPostComment } from "@/networks/axios.custom";
import { Comment } from "@/types/dto/dataType.dto";

/**
 * TODO
 * - 댓글번호를 순차적으로 POST 하는 방법
 * @returns
 */
export default function CommentForm(): JSX.Element {
  const [newComment, setNewComment] = useState<Object>({});

  const handleChange = (e: any): void => {
    const value = e.target.value;
    setNewComment((prev) => ({
      ...prev,
      // id:
      postId: 1,
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
      <InputStyle>
        <input placeholder="댓글을 작성하세요" onChange={handleChange} />
      </InputStyle>
      <ButtonStyle>
        <button onClick={handleClick}>작성하기</button>
      </ButtonStyle>
    </CommentFormStyle>
  );
}

const CommentFormStyle = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
`;

const InputStyle = styled.div`
  border: 1px solid lightgray;
  border-radius: 0.25rem;
`;

const ButtonStyle = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
