import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useSWRConfig } from "swr";
import InputInstance from "../atoms/inputs/InputInstance";
import BaseButton from "../atoms/buttons/BaseButton";
import TextAreaInstance from "../atoms/inputs/TextAreaInstance";
import { axiosPostComment } from "@/networks/axios.custom";
import { commentPolicy } from "@/types/enum/policy";
import { useValidPassword } from "@/hooks/useValidPassword";

interface CommentFormProps {
  postId: number;
  commentsLength: number;
  parrent?: number;
}

export default function CommentForm(props: CommentFormProps): JSX.Element {
  const { postId, commentsLength, parrent } = props;
  const [writer, setWriter] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [newComment, setNewComment] = useState<Object>({});
  const { mutate } = useSWRConfig();
  const { isValidPassword } = useValidPassword(password);

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

  const handleClick = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (isValidPassword)
      axiosPostComment(newComment)
        .then((response) => {
          if (response.status === 201)
            mutate(`/api/comments/?postId=${postId}`);
        })
        .catch((error) => console.error(error));
  };

  return (
    <CommentFormStyle onSubmit={handleClick}>
      <p style={{ fontWeight: "700" }}>{`${commentsLength}개의 댓글`}</p>
      <InputInstance
        value={writer}
        setValue={setWriter}
        maxLength={commentPolicy.writer}
        placeholder={"글쓴이를 입력하세요."}
      />
      <InputInstance
        value={password}
        setValue={setPassword}
        maxLength={commentPolicy.password}
        placeholder={"비밀번호를 입력하세요."}
        type={"password"}
        isValidPassword={isValidPassword}
      />
      <TextAreaInstance
        theme={"comment"}
        value={content}
        maxLength={commentPolicy.content}
        setValue={setContent}
        placeholder={"내용을 입력하세요"}
      />
      <ButtonStyle>
        <BaseButton theme={"contained"} value={"작성하기"} type={"submit"} />
      </ButtonStyle>
    </CommentFormStyle>
  );
}

const CommentFormStyle = styled.form`
  width: 48rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 20rem;
  }
`;

const ButtonStyle = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
