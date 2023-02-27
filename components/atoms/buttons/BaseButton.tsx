import styled from "@emotion/styled";

interface BaseButtonProps {
  value: string;
  handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function BaseButton(props: BaseButtonProps): JSX.Element {
  return (
    <BaseButtonStyle onClick={props.handleClick}>{props.value}</BaseButtonStyle>
  );
}

const BaseButtonStyle = styled.button`
  border: 0;
  border-radius: 0.25rem;
  width: 6rem;
  height: 2rem;
  background-color: #fe713b;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #fc8d61;
  }
`;
