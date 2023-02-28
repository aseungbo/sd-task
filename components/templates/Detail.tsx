import styled from "@emotion/styled";
import { Post } from "@/types/dto/dataType.dto";
import DetailCard from "../organisms/DetailCard";

interface DetailProps {
  post: Post;
}

export default function Detail(props: DetailProps): JSX.Element {
  return (
    <DetailStyle>
      <DetailCard post={props.post} />
    </DetailStyle>
  );
}

const DetailStyle = styled.section`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
