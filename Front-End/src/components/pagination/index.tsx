import React from "react";

const Pagination = ({
  totalCount,
  showPerPage,
  handlePageChange,
  currentPage,
}: {
  totalCount: any;
  showPerPage: any;
  handlePageChange: any;
  currentPage: any;
}) => {
  const pages = Math.ceil(totalCount / showPerPage);
  //Set number of pages
  const numberOfPages: number[] = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }
  const renderPaginate = () => {
    return (
      <div className="flex items-center gap-4">
        <button
          disabled={currentPage === 1}
          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={() => {
            window.scrollTo(0, 250);
            handlePageChange({
              selected: currentPage - 1,
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Previous
        </button>
        <div className="flex items-center gap-2">
          {numberOfPages.map((item, index) => (
            <button
              key={index}
              className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${
                currentPage === item ? "bg-themePrimary text-white" : ""
              }`}
              type="button"
              onClick={() => {
                window.scrollTo(0, 250);
                handlePageChange({
                  selected: item,
                });
              }}
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                {item}
              </span>
            </button>
          ))}
        </div>
        <button
          disabled={currentPage === numberOfPages.length}
          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={() => {
            window.scrollTo(0, 250);
            handlePageChange({
              selected: currentPage + 1,
            });
          }}
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    );
  };

  return <div className="mx-auto px-4 mt-10">{renderPaginate()}</div>;
};

export default Pagination;
