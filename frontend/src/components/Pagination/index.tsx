import { PaginationContainer } from './styles'
import arrowLeft from '../../assets/images/pagination/arrow-left.svg'
import arrowRight from '../../assets/images/pagination/arrow-right.svg'

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
        <a href="#" onClick={prePage} className="page-link">
          <img src={arrowLeft} alt="Anterior" />
        </a>
      </li>
      <li className="page-item">
        <a href="#" className="page-link" onClick={nextPage}>
          <img src={arrowRight} alt="Próxima" />
        </a>
      </li>
    </PaginationContainer>
  )
}