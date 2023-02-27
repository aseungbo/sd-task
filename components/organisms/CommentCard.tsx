import styled from "@emotion/styled";
import { useState } from "react";
import { useSWRConfig } from "swr";
import { axiosPatchComment, axiosDeleteComment } from "@/networks/axios.custom";
import { Comment } from "@/types/dto/dataType.dto";
import BaseButton from "../atoms/buttons/BaseButton";
import InputInstance from "../atoms/inputs/InputInstance";
import TextAreaInstance from "../atoms/inputs/TextAreaInstance";

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

  const handleDelete = () => {
    axiosDeleteComment(comment.id, { data: { password: password } })
      .then((response) => {
        mutate(`/api/comments/?postId=${postId}`);
        setIsDelete(false);
      })
      .catch((error) => console.error(error));
  };

  const handleModify = () => {
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
            value={"수정"}
            handleClick={() => {
              if (!isDelete) setIsModify((state) => !state);
            }}
          />
          <BaseButton
            value={"삭제"}
            handleClick={() => {
              if (!isModify) setIsDelete((state) => !state);
            }}
          />
        </HeadButtonStyle>
      </HeadStyle>
      {!isModify && !isDelete && <ContentStyle>{comment.content}</ContentStyle>}
      {isDelete && (
        <>
          <InputInstance
            value={password}
            setValue={setPassword}
            placeholder={"비밀번호를 입력하세요."}
          />
          <BaseButton value={"삭제하기"} handleClick={handleDelete} />
        </>
      )}
      {isModify && (
        <>
          <InputInstance
            value={password}
            setValue={setPassword}
            placeholder={"비밀번호를 입력하세요."}
          />
          <TextAreaInstance
            value={content}
            setValue={setContent}
            placeholder="내용을 입력하세요."
          />
          <BaseButton value={"수정하기"} handleClick={handleModify} />
        </>
      )}
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
