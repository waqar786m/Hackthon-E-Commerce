// Pagination.tsx
import React from 'react';

interface PaginationProps {
  totalProducts: number;
  productsPerPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalProducts,
  productsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-2 bg-gray-300 text-white rounded-md disabled:bg-gray-400"
      >
        Previous
      </button>
      <span className="px-4 py-2 text-lg">{`${currentPage} of ${totalPages}`}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-2 bg-gray-300 text-white rounded-md disabled:bg-gray-400"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
