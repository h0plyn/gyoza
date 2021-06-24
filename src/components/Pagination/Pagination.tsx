import { FC } from 'react';
import styled from 'styled-components';
import { Page } from '../../types';

const PaginationStyles = styled.div`
  margin-bottom: 3rem;

  & .pagination {
    display: flex;
    padding: 1rem;
  }

  & .pagination-numbers:not(:first-child) {
    margin-left: 0.5rem;
  }

  & #current-page {
    color: var(--tertiary);
  }
`;

const Pagination: FC<Page> = ({ page, setPage }: Page) => {
  const coinsPerPage = 10;
  const totalPages = 100 / coinsPerPage;
  const pagination = new Array(totalPages).fill(0);

  return (
    <PaginationStyles>
      <div className="pagination" title="pagination" data-testid="pagination">
        {pagination.map((_, idx) => {
          const pageNumber = idx + 1;
          const currentPage = page === pageNumber;
          return (
            <div
              key={pageNumber}
              className="pagination-numbers"
              id={currentPage ? 'current-page' : ''}
              onClick={() => setPage(pageNumber)}
              data-testid="page"
            >
              {pageNumber}
            </div>
          );
        })}
      </div>
      <button
        disabled={page > totalPages - 1 ? true : false}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </PaginationStyles>
  );
};

export default Pagination;
