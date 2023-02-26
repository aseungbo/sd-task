import styled from "@emotion/styled";
import { SetStateAction, Dispatch } from "react";

interface PaginationProps {
  totalCount: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  viewLimit: number;
}

export default function Pagination(props: PaginationProps): JSX.Element {
  const { page, setPage, totalCount, viewLimit } = props;
  const offset = Math.floor((page - 1) / 5);
  const maxPage = Math.ceil(totalCount / viewLimit);
  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    const input = e.target as HTMLElement;
    const page = parseInt(input.innerText);
    setPage(page);
  };

  return (
    <PaginationStyle>
      <>
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
      </>
    </PaginationStyle>
  );
}

const PaginationStyle = styled.nav`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
`;

const ButtonStyle = styled.button`
  width: 2rem;
  height: 3rem;
  background-color: transparent;
  border: 0;
`;
