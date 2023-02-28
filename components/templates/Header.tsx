"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import BaseButton from "../atoms/buttons/BaseButton";

export default function Header(): JSX.Element {
  return (
    <HeaderStyle>
      <Link href={"/"}>
        <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>SD Board</p>
      </Link>
      <Link href={"/write"}>
        <BaseButton theme={"contained"} value={"Create a post"} />
      </Link>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  height: 5vh;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;
