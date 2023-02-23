import styled from "@emotion/styled";
import { Post } from "@/types/dto/dataType.dto";

interface DetailProps {
  post: Post | undefined;
}

export default function Detail(props: DetailProps): JSX.Element {
  const { post } = props;

  return (
    <DetailStyle>
      <HeadStyle>
        <h1>{post?.title}</h1>
        <HeadBarStyle>
          <span>{`${post?.writer} ${post?.created_at}`}</span>
          <HeadButtonStyle>
            {/* <button>수정</button>
            <button>삭제</button> */}
          </HeadButtonStyle>
        </HeadBarStyle>
      </HeadStyle>
      <ContentStyle>{post?.content}</ContentStyle>
    </DetailStyle>
  );
}

const DetailStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeadStyle = styled.div`
  width: 20rem;
  margin-top: 5rem;
`;

const HeadBarStyle = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
`;

const HeadButtonStyle = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ContentStyle = styled.article`
  width: 20rem;
`;
