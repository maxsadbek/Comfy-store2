import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    // hande → handle
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams}`);
  };

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = 1;
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>

        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            type="button"
            className={`btn btn-xs sm:btn-md join-item border-none ${
              pageNumber === page ? "bg-base-300 border-base-300" : ""
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}

        {page < pageCount && (
          <button
            className="btn btn-xs sm:btn-md join-item"
            onClick={() => {
              let nextPage = page + 1;
              handlePageChange(nextPage);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default PaginationContainer;
