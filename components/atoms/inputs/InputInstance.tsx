import styled from "@emotion/styled";
import { SetStateAction, Dispatch } from "react";

interface inputInstanceProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  maxLength?: number;
  placeholder: string;
}

export default function InputInstance(props: inputInstanceProps): JSX.Element {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    props.setValue(e.target.value);
  };

  return (
    <InputInstanceStyle
      value={props.value}
      maxLength={props.maxLength}
      placeholder={props.placeholder}
      onChange={handleChange}
    />
  );
}

const InputInstanceStyle = styled.input`
  padding: 1rem;
  outline: none;
  resize: none;
  border: 1px solid lightgray;
  border-radius: 0.25rem;
  min-height: 1rem;
  font-size: 1rem;
`;
