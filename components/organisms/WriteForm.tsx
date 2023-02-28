"use client";

import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import InputInstance from "../atoms/inputs/InputInstance";
import BaseButton from "../atoms/buttons/BaseButton";
import TextAreaInstance from "../atoms/inputs/TextAreaInstance";
import { axiosPostPost } from "@/networks/axios.custom";
import { postPolicy } from "@/types/enum/policy";

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
      title: title,
      content: content,
      writer: writer,
      password: password,
    }));
  }, [title, writer, password, content]);

  const handleClick = (): void => {
    if (content !== "")
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
        maxLength={postPolicy.title}
        placeholder={"제목을 입력하세요."}
      />
      <InputInstance
        value={writer}
        maxLength={postPolicy.writer}
        setValue={setWriter}
        placeholder={"글쓴이를 입력하세요."}
      />
      <InputInstance
        value={password}
        setValue={setPassword}
        maxLength={postPolicy.password}
        placeholder={"비밀번호를 입력하세요."}
      />
      <TextAreaInstance
        theme={"post"}
        value={content}
        maxLength={postPolicy.content}
        setValue={setContent}
        placeholder={"내용을 입력하세요"}
      />
      <ButtonStyle>
        <BaseButton
          theme={"contained"}
          value={"작성하기"}
          handleClick={handleClick}
        />
      </ButtonStyle>
    </WrtieFormStyle>
  );
}

const WrtieFormStyle = styled.div`
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
