import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button className='btn1' disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>Previous</button>
      <span className='page-info'>Page {currentPage} of {totalPages}</span>
      <button className='btn2' disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
