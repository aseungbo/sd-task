import styled from "@emotion/styled";

interface ViewLimitBoxProps {
  viewLimit: number;
  setViewLimit: any;
}

export default function ViewLimitBox(props: ViewLimitBoxProps): JSX.Element {
  const { viewLimit, setViewLimit } = props;
  const handleChange = (e: any) => {
    setViewLimit(e.target.value);
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
  gap: 0.5rem;
`;

const SelectStyle = styled.select`
  width: 3rem;
  height: 2rem;
  border-radius: 0.25rem;
  outline: 0;
`;
