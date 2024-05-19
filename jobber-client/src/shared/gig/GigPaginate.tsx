/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, ReactElement } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IGigPaginateProps } from 'src/features/gig/interfaces/gig.interface';
import { v4 as uuidv4 } from 'uuid';

const GigPaginate: FC<IGigPaginateProps> = ({
  gigs,
  totalGigs,
  showNumbers,
  itemsPerPage,
  currentPage,
  handlePageChange
}): ReactElement => {
  const paginationCount: number[] = [...Array(Math.ceil((totalGigs as number) / itemsPerPage)).keys()];

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < paginationCount.length) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex w-full justify-center">
      <ul className="flex gap-8">
        <div
          className={`cursor-pointer p-3 ${currentPage === 1 ? 'cursor-not-allowed text-gray-400' : 'rounded-full border border-sky-400'}`}
          onClick={handlePrevPage}
        >
          <FaArrowLeft className="flex self-center" />
        </div>
        {showNumbers &&
          paginationCount.map((_, index) => (
            <li
              key={uuidv4()}
              className={`cursor-pointer px-3 py-2 ${currentPage === index + 1 ? 'border-b-2 border-black font-bold text-black' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </li>
          ))}
        <div
          className={`cursor-pointer p-3 ${currentPage === paginationCount.length ? 'cursor-not-allowed text-gray-400' : 'rounded-full border border-sky-400'}`}
          onClick={handleNextPage}
        >
          <FaArrowRight className="flex self-center" color={`${currentPage === paginationCount.length ? 'grey' : 'black'}`} />
        </div>
      </ul>
    </div>
  );
};

export default GigPaginate;
