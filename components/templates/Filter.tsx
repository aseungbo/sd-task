import styled from "@emotion/styled";
import LimitBox from "../organisms/LimitBox";

interface FilterProps {
  limit: number;
  setLimit: any;
}

export default function Filter(props: FilterProps): JSX.Element {
  return (
    <FilterStyle>
      <LimitBox limit={props.limit} setLimit={props.setLimit} />
    </FilterStyle>
  );
}

const FilterStyle = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
`;
