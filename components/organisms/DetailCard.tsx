import styled from "@emotion/styled";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSWRConfig } from "swr";
import BaseButton from "../atoms/buttons/BaseButton";
import InputInstance from "../atoms/inputs/InputInstance";
import TextAreaInstance from "../atoms/inputs/TextAreaInstance";
import { useValidPassword } from "@/hooks/useValidPassword";
import { axiosPatchPost, axiosDeletePost } from "@/networks/axios.custom";
import { Post } from "@/types/dto/dataType.dto";
import { postPolicy } from "@/types/enum/policy";

interface DetailCardProps {
  post: Post;
}

export default function DetailCard(props: DetailCardProps): JSX.Element {
  const { post } = props;
  const [title, setTitle] = useState<string>(post.title);
  const [password, setPassword] = useState<string>("");
  const [content, setContent] = useState<string>(post.content);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isModify, setIsModify] = useState<boolean>(false);
  const { isValidPassword } = useValidPassword(password);
  const { mutate } = useSWRConfig();
  const router = useRouter();

  const handleDelete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidPassword)
      axiosDeletePost(post.id, { data: { password: password } })
        .then((response) => {
          if (response.status === 200) {
            router.push("/");
          }
        })
        .catch((error) => console.error(error));
  };

  const handleModify = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidPassword)
      axiosPatchPost(post.id, {
        title: title,
        password: password,
        content: content,
      })
        .then((response) => {
          setIsModify(false);
          mutate(`/api/posts/${post.id}`);
        })
        .catch((error) => console.error(error));
  };

  return (
    <DetailCardStyle>
      <HeadStyle>
        <h1>{post?.title}</h1>
        <HeadButtonStyle>
          <BaseButton
            theme={"text"}
            value={"수정"}
            handleClick={() => {
              if (!isDelete) setIsModify((state) => !state);
            }}
          />
          <BaseButton
            theme={"text"}
            value={"삭제"}
            handleClick={() => {
              if (!isModify) setIsDelete((state) => !state);
            }}
          />
        </HeadButtonStyle>
      </HeadStyle>
      <p>{`${post?.writer}`}</p>
      {post?.updated_at ? (
        <p>{`${post?.updated_at.split("T")[0]}`}</p>
      ) : (
        <p>{`${post?.created_at.split("T")[0]}`}</p>
      )}

      {!isModify && !isDelete && (
        <p style={{ wordWrap: "break-word" }}>{post.content}</p>
      )}
      {isDelete && (
        <FormStyle onSubmit={handleDelete}>
          <InputInstance
            value={password}
            setValue={setPassword}
            placeholder={"비밀번호를 입력하세요."}
            type={"password"}
            isValidPassword={isValidPassword}
          />
          <ButtonStyle>
            <BaseButton
              theme={"contained"}
              value={"삭제하기"}
              type={"submit"}
            />
          </ButtonStyle>
        </FormStyle>
      )}
      {isModify && (
        <FormStyle onSubmit={handleModify}>
          <InputInstance
            value={title}
            setValue={setTitle}
            maxLength={postPolicy.title}
            placeholder={"제목을 입력하세요."}
          />
          <InputInstance
            value={password}
            setValue={setPassword}
            maxLength={postPolicy.password}
            placeholder={"비밀번호를 입력하세요."}
            type={"password"}
            isValidPassword={isValidPassword}
          />
          <TextAreaInstance
            theme={"post"}
            value={content}
            setValue={setContent}
            maxLength={postPolicy.content}
            placeholder={"내용을 입력하세요."}
          />
          <ButtonStyle>
            <BaseButton
              theme={"contained"}
              value={"수정하기"}
              type={"submit"}
            />
          </ButtonStyle>
        </FormStyle>
      )}
    </DetailCardStyle>
  );
}

const DetailCardStyle = styled.div`
  width: 48rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 20rem;
  }
`;

const HeadStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeadButtonStyle = styled.div`
  display: flex;
`;

const FormStyle = styled.form`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const ButtonStyle = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
