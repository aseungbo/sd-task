import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface BaseButtonProps {
  theme: string;
  handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
  value: string;
  type?: "button" | "submit" | "reset";
}

export default function BaseButton(props: BaseButtonProps): JSX.Element {
  return (
    <BaseButtonStyle
      theme={props.theme}
      onClick={props.handleClick}
      type={props.type}
    >
      {props.value}
    </BaseButtonStyle>
  );
}

const BaseButtonStyle = styled.button`
  border: 0;
  cursor: pointer;

  ${(props) =>
    props.theme === "contained" &&
    css`
      width: 8rem;
      height: 2rem;
      color: #ffffff;
      background-color: #fe713b;
      border-radius: 0.25rem;
      &:hover {
        background-color: #fc8d61;
      }
    `}
  ${(props) =>
    props.theme === "text" &&
    css`
      width: 3rem;
      height: 2rem;
      color: #4a5568;
      background-color: transparent;
      &:hover {
        border-bottom: 1px solid #4a5568;
      }
    `}
    ${(props) =>
    props.theme === "reply" &&
    css`
      width: 5rem;
      height: 2rem;
      font-weight: 700;
      color: #fe713b;
      background-color: transparent;
      &:hover {
      }
    `}
`;
