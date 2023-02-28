import styled from "@emotion/styled";
import { SetStateAction, Dispatch } from "react";

interface inputInstanceProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  maxLength?: number;
  placeholder: string;
  type?: string;
  isValidPassword?: boolean;
}

export default function InputInstance(props: inputInstanceProps): JSX.Element {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    props.setValue(e.target.value);
  };

  return (
    <>
      <InputInstanceStyle
        value={props.value}
        maxLength={props.maxLength}
        placeholder={props.placeholder}
        onChange={handleChange}
        type={props.type}
        autoComplete={props.type === "password" ? "off" : "on"}
      />
      {props.type === "password" && props.value && !props.isValidPassword && (
        <p style={{ fontSize: "0.5rem", color: "red", padding: "0 0.5rem" }}>
          비밀번호는 영문+숫자+특수기호 16자 이하입니다.
        </p>
      )}
    </>
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
