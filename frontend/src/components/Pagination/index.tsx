import { PaginationContainer } from './styles'

interface PaginationProps {
  prePage(): void;
  nextPage(): void;
  numbers: number[];
  currentPage: number;
  changeCPage(n: number): void;
}

export function Pagination({ prePage, nextPage, numbers, currentPage, changeCPage }: PaginationProps) {
  return (
    <PaginationContainer className="pagination">
      {
        numbers.map((n, i) => (
          <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
            <a href="#" className="page-link" onClick={() => changeCPage(n)}>{n}</a>
          </li>
        ))
      }
      <li className="page-item">
        <a href="#" onClick={prePage} className="page-link">P</a>
      </li>
      <li className="page-item">
        <a href="#" className="page-link" onClick={nextPage}>N</a>
      </li>
    </PaginationContainer>
  )
}