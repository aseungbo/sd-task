"use client";

import styled from "@emotion/styled";

export default function Footer(): JSX.Element {
  return <FooterStyle>©2023 aseungbo</FooterStyle>;
}

const FooterStyle = styled.footer`
  position: fixed;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 0.5rem;
`;
