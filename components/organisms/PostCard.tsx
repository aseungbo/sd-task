import Link from "next/link";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { axiosGetComments } from "@/networks/axios.custom";
import { Post } from "@/types/dto/dataType.dto";

interface PostCardProps {
  post: Post;
}

export default function PostCard(props: PostCardProps): JSX.Element {
  const { post } = props;
  const [commentsCnt, setCommentsCnt] = useState<number>();

  useEffect(() => {
    axiosGetComments(post.id).then((response) => {
      setCommentsCnt(response.data.length);
    });
  }, []);

  return (
    <PostCardStyle href={`/detail/${post.id}`}>
      <SummaryStyle>
        <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>{post.title}</p>
        <p
          style={{
            color: "#4a5568",
            overflow: "hidden",
            textOverflow: "ellipsis",
            height: "5rem",
          }}
        >
          {post.content}
        </p>
      </SummaryStyle>
      <BottomStyle>
        <p>{post.writer}</p>
        <p style={{ color: "#4a5568" }}>{`${commentsCnt} comments`}</p>
      </BottomStyle>
    </PostCardStyle>
  );
}

const PostCardStyle = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  width: 30rem;
  height: 20rem;
  padding: 2rem;
  border: 1px solid #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 0 0 1px rgb(53 72 91 / 1%), 0 2px 2px rgb(0 0 0 / 1%),
    0 4px 4px rgb(0 0 0 / 1%), 0 10px 8px rgb(0 0 0 / 1%),
    0 15px 15px rgb(0 0 0 / 1%), 0 30px 30px rgb(0 0 0 / 1%),
    0 70px 65px rgb(0 0 0 / 1%);
  &:hover {
    background-color: #fafafa;
    border: 1px solid #fe713b;
  }
`;

const SummaryStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
`;

const BottomStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;
