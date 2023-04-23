import { render } from '@testing-library/react'
import { Pagination } from '.'

describe('Pagination', () => {
  it('Render correctly', () => {
    const { getByTestId } = render(
      <Pagination prePage={() => ('')} nextPage={() => ('')} numbers={[2]} currentPage={2} changeCPage={() => (2)} />
    )
    const element = getByTestId('pagination-element');
    expect(element).toHaveClass('pagination');
  })
})