import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Inside the Home component', () => {
  render(<Home />)
  test('should render the title "This is my To-Do-List"', () => {
    const titleElement = screen.getByText('This is my To-Do-List')
    expect(titleElement).toBeInTheDocument()
  })
})
