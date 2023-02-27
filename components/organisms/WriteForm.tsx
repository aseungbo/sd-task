"use client";

import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import InputInstance from "../atoms/inputs/InputInstance";
import BaseButton from "../atoms/buttons/BaseButton";
import TextAreaInstance from "../atoms/inputs/TextAreaInstance";
import { axiosPostPost } from "@/networks/axios.custom";

export default function WriteForm(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [writer, setWriter] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [newPost, setNewPost] = useState<Object>({});
  const router = useRouter();

  useEffect(() => {
    setNewPost((prev) => ({
      ...prev,
      // id: number,
      title: title,
      content: content,
      writer: writer,
      password: password,
      // created_at: string,
      updated_at: "string",
    }));
  }, [title, writer, password, content]);

  const handleClick = (): void => {
    axiosPostPost(newPost)
      .then((response) => {
        if (response.status === 201) {
          router.push(`/detail/${response.data.id}`);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <WrtieFormStyle>
      <InputInstance
        value={title}
        setValue={setTitle}
        placeholder={"제목을 입력하세요."}
      />
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
    </WrtieFormStyle>
  );
}

const WrtieFormStyle = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 5rem 0;
`;

const ButtonStyle = styled.div`
  height: 1rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
