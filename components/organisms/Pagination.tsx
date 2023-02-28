import styled from "@emotion/styled";
import { SetStateAction, Dispatch } from "react";

interface PaginationProps {
  page: number;
  maxPage: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export default function Pagination(props: PaginationProps): JSX.Element {
  const { page, maxPage, setPage } = props;
  const offset = Math.floor((page - 1) / 5);

  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    const input = e.target as HTMLElement;
    const page = parseInt(input.innerText);
    setPage(page);
  };

  return (
    <PaginationStyle>
      <ButtonStyle onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </ButtonStyle>

      {Array(maxPage < 5 ? maxPage : 5)
        .fill(0)
        .map((_, i) => {
          return (
            <ButtonStyle
              key={(i % 5) + 1 + 5 * offset}
              style={{
                color: page === (i % 5) + 1 + 5 * offset ? "red" : "inherit",
              }}
              onClick={handleClick}
            >
              {(i % 5) + 1 + 5 * offset}
            </ButtonStyle>
          );
        })}
      <ButtonStyle
        onClick={() => setPage(page + 1)}
        disabled={page === maxPage}
      >
        &gt;
      </ButtonStyle>
    </PaginationStyle>
  );
}

const PaginationStyle = styled.nav`
  gap: 0.5rem;
  display: flex;
  justify-content: center;
  button {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const ButtonStyle = styled.button`
  background-color: transparent;
  border: 0;
`;
