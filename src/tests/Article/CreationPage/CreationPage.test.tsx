import { describe, expect, it, vi, afterEach } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import React from 'react'

import { CreationPage } from '@Pages/Article/CreationPage'

React.createElement('div', { id: 'portal' })

vi.mock('react-dom', () => ({
  ...vi.importActual('react-dom'),
  createPortal: (children: JSX.Element) => children,
}))

describe('CreationPage Renders', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    const page = render(<CreationPage />)
    expect(page.queryByText('First name')).toBeInTheDocument()
    expect(page.queryByText('Body')).toBeInTheDocument()
    expect(page.getByRole('button')).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const page = render(<CreationPage />)
    expect(page).toMatchSnapshot()
  })
})
