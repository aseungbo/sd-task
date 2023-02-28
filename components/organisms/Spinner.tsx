import styled from "@emotion/styled";

export default function Spinner(): JSX.Element {
  return (
    <SpinnerStyle>
      <h3>Loading...</h3>
    </SpinnerStyle>
  );
}

const SpinnerStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
