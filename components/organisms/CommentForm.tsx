import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useSWRConfig } from "swr";
import InputInstance from "../atoms/inputs/InputInstance";
import BaseButton from "../atoms/buttons/BaseButton";
import { axiosPostComment } from "@/networks/axios.custom";
import TextAreaInstance from "../atoms/inputs/TextAreaInstance";

interface CommentFormProps {
  postId: number;
  parrent?: number;
}

export default function CommentForm(props: CommentFormProps): JSX.Element {
  const { postId, parrent } = props;
  const [writer, setWriter] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [newComment, setNewComment] = useState<Object>({});
  const { mutate } = useSWRConfig();

  useEffect(() => {
    setNewComment((prev) => ({
      ...prev,
      postId: postId,
      parrent: parrent ?? null,
      content: content,
      writer: writer,
      password: password,
    }));
  }, [writer, password, content]);

  const handleClick = (): void => {
    axiosPostComment(newComment)
      .then((response) => {
        mutate(`/api/comments/?postId=${postId}`);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <CommentFormStyle>
      <InputInstance
        value={writer}
        setValue={setWriter}
        placeholder={"글쓴이를 입력하세요."}
      />
      <InputInstance
        value={password}
        setValue={setPassword}
        placeholder={"비밀번호를 입력하세요."}
      />
      <TextAreaInstance
        value={content}
        setValue={setContent}
        placeholder={"내용을 입력하세요"}
      />
      <ButtonStyle>
        <BaseButton value={"작성하기"} handleClick={handleClick} />
      </ButtonStyle>
    </CommentFormStyle>
  );
}

const CommentFormStyle = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ButtonStyle = styled.div`
  height: 1rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
