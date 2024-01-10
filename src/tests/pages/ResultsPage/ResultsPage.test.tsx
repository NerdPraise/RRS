import { describe, expect, it, vi, afterEach, beforeEach } from 'vitest'
import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import React from 'react'

import { ResultsPage } from '@Pages/ResultsPage'

let result = [
  {
    id: 1,
    author: 'John Doe',
    title: 'Whispers of Eternity',
    body: "In the dimly lit room, Sarah felt a shiver down her spine. The words echoed in her mind, 'Whispers of eternity resonate in the silence of the night.' It was a phrase she had read in her favorite book by John Doe, an author known for weaving tales of mystery and magic.",
  },
  {
    id: 2,
    author: 'Jane Smith',
    title: 'Reflections in the Mirror',
    body: "As the raindrops tapped against the window pane, Mark found himself lost in the pages of 'Reflections in the Mirror' by Jane Smith. The author's prose painted vivid pictures of self-discovery and inner reflections, leaving a lasting impression on the reader's soul.",
  },
  {
    id: 3,
    author: 'Emily Johnson',
    title: 'Serenade of Shadows',
    body: "Amelia gazed at the moonlit sky, pondering the mysteries that unfolded in 'Serenade of Shadows' by Emily Johnson. Each page carried a melody of suspense, and the author's intricate storytelling left readers enchanted by the dance between light and shadow.",
  },
]

describe('ResultPage Renders', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    vi.doMock('react', async () => ({
      ...(await vi.importActual('react')),
      useState: vi
        .fn()
        .mockImplementationOnce(() => ['', vi.fn()])
        .mockImplementationOnce(() => [result, vi.fn()]),
    }))
    const page = render(<ResultsPage />)
    expect(page.queryByText('Search')).toBeInTheDocument()
    expect(page.getByRole('button')).toBeInTheDocument()
    expect(
      page.queryByPlaceholderText('Search by author or title'),
    ).toBeInTheDocument()
    expect(page.queryByText('Author: Jane Smith')).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const page = render(<ResultsPage />)
    expect(page).toMatchSnapshot()
  })
})

describe('ResultPage Actions', () => {
  beforeEach(() => {})

  afterEach(() => {
    cleanup()
  })

  it('searches by Title correctly', () => {
    vi.doMock('react', async () => ({
      ...(await vi.importActual('react')),
      useState: vi
        .fn()
        .mockImplementationOnce(() => ['Reflections', vi.fn()]) // set search term
        .mockImplementationOnce(() => [result, vi.fn()])
        .mockImplementationOnce(() => ['Reflections', vi.fn()]), // set search term
    }))
    render(<ResultsPage />)
    expect(screen.queryByText('Reflections in the Mirror')).toBeInTheDocument()
    expect(screen.queryByText('Whispers of Eternity')).not.toBeInTheDocument()
    // screen.debug()
    // const button = screen.getByRole('button')
    // fireEvent.click(button)
  })
})
