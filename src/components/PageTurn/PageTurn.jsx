export default function PageTurn({
  charactersPerPage,
  totalCharacters,
  paginate,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination flex-wrap">
        <li className="page-item">
          <a href="!#" className="page-link">
            Prev
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a href="!#" className="page-link">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
