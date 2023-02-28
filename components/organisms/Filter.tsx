import styled from "@emotion/styled";
import ViewLimitBox from "./ViewLimitBox";
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

const FilterStyle = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
