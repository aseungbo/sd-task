import styled from "@emotion/styled";
import { SetStateAction, Dispatch } from "react";
import ViewLimitBox from "./ViewLimitBox";

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

const FilterStyle = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
