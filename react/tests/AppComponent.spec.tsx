import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'

import App from '../src/App'

describe('App', () => {
  it('renders button', () => {
    render(<App />)

    const button = screen.getByRole('button')

    expect(button).toBeVisible()
  })

  it('increase one time the count', () => {
    render(<App />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(button).toHaveTextContent('count is 1')
  })
})