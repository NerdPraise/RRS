import { describe, expect, it, vi, afterEach } from 'vitest'
import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

import { CreationPage } from '@Pages/Article/CreationPage'

let btnClick = vi.fn() // Because mock vi.mock is hoisted

describe('CreationPage Actions', () => {
  let onSubmitMock = vi.fn()
  // vi.mock('react', async () => ({
  //   ...(await vi.importActual('react')),
  //   useState: vi
  //     .fn()
  //     .mockImplementationOnce(() => ['Reflections', vi.fn()]) // set search term
  //     .mockImplementationOnce(() => [result, vi.fn()])
  //     // This is for the second test; Module mocks in vitest requires such hack
  //     .mockImplementationOnce(() => ['Reflections', btnClick])
  //     .mockImplementationOnce(() => [result, vi.fn()]),
  // }))
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  vi.mock('react-dom', () => ({
    ...vi.importActual('react-dom'),
    createPortal: (children: JSX.Element) => children,
  }))

  it('does not submit an empty form', () => {
    render(<CreationPage />)
    screen.getByRole('form').onsubmit = onSubmitMock
    const btn = screen.getByRole('button')
    fireEvent.click(btn)
    expect(onSubmitMock).not.toHaveBeenCalled()
  })

  it('does not submit an invalid value', () => {
    render(<CreationPage />)
    screen.getByRole('form').onsubmit = onSubmitMock
    const btn = screen.getByRole('button')

    fireEvent.change(screen.getByTestId('first_name'), {
      target: { value: 'Sam' },
    })
    fireEvent.change(screen.getByTestId('last_name'), {
      target: { value: 'Aj' },
    })
    fireEvent.change(screen.getByTestId('email'), {
      target: { value: '!nvalidemail@example.c' },
    })
    fireEvent.change(screen.getByTestId('phone'), {
      target: { value: '08092931234' },
    })
    fireEvent.change(screen.getByTestId('address'), {
      target: { value: 'Some address' },
    })
    fireEvent.change(screen.getByTestId('textarea'), {
      target: { value: 'Some body!' },
    })
    fireEvent.click(btn)

    expect(onSubmitMock).not.toHaveBeenCalled()
  })
})
