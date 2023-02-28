import styled from "@emotion/styled";
import { SetStateAction, Dispatch } from "react";

interface ViewLimitBoxProps {
  viewLimit: number;
  setViewLimit: Dispatch<SetStateAction<number>>;
}

export default function ViewLimitBox(props: ViewLimitBoxProps): JSX.Element {
  const { viewLimit, setViewLimit } = props;
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = parseInt(e.target.value);
    setViewLimit(value);
  };

  return (
    <ViewLimitBoxStyle>
      <span>view</span>
      <SelectStyle value={viewLimit} onChange={handleChange}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </SelectStyle>
    </ViewLimitBoxStyle>
  );
}

const ViewLimitBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectStyle = styled.select`
  width: 3rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  outline: 0;
`;
