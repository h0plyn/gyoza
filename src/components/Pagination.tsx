import React, { FC, Fragment } from 'react';
import { Page } from '../types';

const Pagination: FC<Page> = ({ page, setPage }: Page) => {
  const coinsPerPage = 10;
  const totalPages = 100 / coinsPerPage;
  const pagination = new Array(totalPages).fill(0);

  return (
    <div style={{ marginBottom: '3rem' }}>
      <div className="pagination" title="pagination">
        {pagination.map((_, idx) => {
          const pageNumber = idx + 1;
          const currentPage = page === pageNumber;
          return (
            <div
              key={pageNumber}
              className="pagination-numbers"
              id={currentPage ? 'current-page' : ''}
              onClick={() => setPage(pageNumber)}
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
    </div>
  );
};

export default Pagination;
