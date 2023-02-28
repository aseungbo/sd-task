import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { SetStateAction, Dispatch } from "react";

interface TextAreaInstanceProps {
  theme: string;
  value: string;
  maxLength?: number;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
}

export default function TextAreaInstance(
  props: TextAreaInstanceProps
): JSX.Element {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    props.setValue(e.target.value);
  };

  return (
    <TextAreaStyle
      theme={props.theme}
      value={props.value}
      maxLength={props.maxLength}
      placeholder={props.placeholder}
      onChange={handleChange}
    />
  );
}

const TextAreaStyle = styled.textarea`
  padding: 1rem;
  outline: none;
  resize: none;
  border: 1px solid lightgray;
  border-radius: 0.25rem;
  font-size: 1rem;
  ${(props) =>
    props.theme === "post" &&
    css`
      min-height: 30rem;

      @media screen and (max-width: 768px) {
        min-height: 20rem;
      }
    `}
  ${(props) =>
    props.theme === "comment" &&
    css`
      min-height: 5rem;
    `}
`;
