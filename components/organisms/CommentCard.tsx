import styled from "@emotion/styled";
import { useState } from "react";
import { useSWRConfig } from "swr";
import { axiosPatchComment, axiosDeleteComment } from "@/networks/axios.custom";
import BaseButton from "../atoms/buttons/BaseButton";
import InputInstance from "../atoms/inputs/InputInstance";
import TextAreaInstance from "../atoms/inputs/TextAreaInstance";
import { Comment } from "@/types/dto/dataType.dto";
import { commentPolicy } from "@/types/enum/policy";
import { useValidPassword } from "@/hooks/useValidPassword";

interface CommentCardProps {
  comment: Comment;
  postId: number;
}

export default function CommentCard(props: CommentCardProps): JSX.Element {
  const { comment, postId } = props;
  const [password, setPassword] = useState<string>("");
  const [content, setContent] = useState<string>(comment.content);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isModify, setIsModify] = useState<boolean>(false);
  const { mutate } = useSWRConfig();
  const { isValidPassword } = useValidPassword(password);

  const handleDelete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidPassword)
      axiosDeleteComment(comment.id, { data: { password: password } })
        .then((response) => {
          mutate(`/api/comments/?postId=${postId}`);
          setIsDelete(false);
        })
        .catch((error) => console.error(error));
  };

  const handleModify = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidPassword)
      axiosPatchComment(comment.id, { password: password, content: content })
        .then((response) => {
          mutate(`/api/comments/?postId=${postId}`);
          setIsModify(false);
        })
        .catch((error) => console.error(error));
  };

  return (
    <CommentCardStyle>
      <HeadStyle>
        <span style={{ fontSize: "1rem", fontWeight: "700" }}>
          {comment.writer}
        </span>
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
      {!isModify && !isDelete && <p>{comment.content}</p>}
      {isDelete && (
        <FormStyle onSubmit={handleDelete}>
          <InputInstance
            value={password}
            setValue={setPassword}
            maxLength={commentPolicy.password}
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
            placeholder="내용을 입력하세요."
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
    </CommentCardStyle>
  );
}

const CommentCardStyle = styled.div`
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
  align-items: center;
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
