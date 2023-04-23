import { render } from '@testing-library/react'
import { ButtonBackNavigation } from '.'

jest.mock('react-router-dom', () => {
  return {
    useNavigate() {
      return {
        navigate: 1
      }
    }
  }
})

describe('ButtonBackNavigation', () => {
  it('Render correctly', () => {
    const { getByText } = render(
      <ButtonBackNavigation />
    )
    expect(getByText('Voltar')).toBeTruthy()
  })
})