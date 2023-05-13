export default function PageTurn({
  charactersPerPage,
  totalCharacters,
  paginate,
  currentPage,
}) {
  const totalPages = Math.ceil(totalCharacters / charactersPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  const getDisplayedPageNumbers = () => {
    if (totalPages <= 10) {
      return pageNumbers;
    } else if (currentPage <= 6) {
      return pageNumbers.slice(0, 9).concat(["..."]).concat([totalPages]);
    } else if (currentPage >= totalPages - 5) {
      return [1].concat(["..."]).concat(pageNumbers.slice(-9));
    } else {
      return [1]
        .concat(["..."])
        .concat(pageNumbers.slice(currentPage - 4, currentPage + 3))
        .concat(["..."])
        .concat([totalPages]);
    }
  };

  const displayedPageNumbers = getDisplayedPageNumbers();

  return (
    <nav className="opacity-75 pagination-bg">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a onClick={() => paginate("prev")} className="page-link">
            Prev
          </a>
        </li>
        {displayedPageNumbers.map((number, index) => (
          <li
            key={index}
            className={`page-item ${number === "..." ? "disabled" : ""} ${
              currentPage === number ? "active" : ""
            }`}
          >
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <a onClick={() => paginate("next")} className="page-link">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
