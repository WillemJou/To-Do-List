import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home Component', () => {
  test('should render the title "This is my To-Do-List !"', () => {
    render(<Home />)

    const titleElement = screen.getByText('This is my To-Do-List !')
    expect(titleElement).toBeInTheDocument()
  })
})
