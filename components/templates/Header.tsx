"use client";

import styled from "@emotion/styled";
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <HeaderStyle>
      <Link href={"/"}>
        <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>SD Board</p>
      </Link>
      {/* <button>Create a board</button> */}
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  height: 10vh;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;
