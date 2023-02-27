"use client";

import styled from "@emotion/styled";
import WriteForm from "@/components/organisms/WriteForm";

export default function page(): JSX.Element {
  return (
    <MainStyle>
      <WriteForm />
    </MainStyle>
  );
}

const MainStyle = styled.main`
  display: flex;
  justify-content: center;
`;
