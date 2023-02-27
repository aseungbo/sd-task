import styled from "@emotion/styled";
import { SetStateAction, Dispatch } from "react";

interface TextAreaInstanceProps {
  value: string;
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
      value={props.value}
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
  min-height: 5rem;
  font-size: 1rem;
`;
