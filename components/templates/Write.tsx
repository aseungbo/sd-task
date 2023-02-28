import styled from "@emotion/styled";
import WriteForm from "../organisms/WriteForm";

export default function Write(): JSX.Element {
  return (
    <WriteStyle>
      <WriteForm />
    </WriteStyle>
  );
}

const WriteStyle = styled.section`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
