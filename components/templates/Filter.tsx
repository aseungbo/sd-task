import styled from "@emotion/styled";
import ViewLimitBox from "../organisms/ViewLimitBox";
import { SetStateAction, Dispatch } from "react";

interface FilterProps {
  viewLimit: number;
  setViewLimit: Dispatch<SetStateAction<number>>;
}

export default function Filter(props: FilterProps): JSX.Element {
  return (
    <FilterStyle>
      <ViewLimitBox
        viewLimit={props.viewLimit}
        setViewLimit={props.setViewLimit}
      />
    </FilterStyle>
  );
}

const FilterStyle = styled.section`
  height: 5vh;
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
`;
