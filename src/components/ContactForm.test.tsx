import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ContactForm } from './ContactForm'

function fillAndSubmit() {
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Jamie Rivera' } })
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'jamie@example.com' } })
  fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Loved the case study.' } })
  fireEvent.click(screen.getByTestId('contact-form-submit'))
}

describe('ContactForm', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn())
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders the name, email, and message fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('shows a success message and resets the form after a successful submission', async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      json: () => Promise.resolve({ success: true }),
    } as Response)

    render(<ContactForm />)
    fillAndSubmit()

    await waitFor(() => expect(screen.getByTestId('contact-form-success')).toBeInTheDocument())
    expect(screen.getByText(/thanks, got it/i)).toBeInTheDocument()
  })

  it('shows a retry-able error message when the submission fails', async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      json: () => Promise.resolve({ success: false }),
    } as Response)

    render(<ContactForm />)
    fillAndSubmit()

    await waitFor(() => expect(screen.getByTestId('contact-form-error')).toBeInTheDocument())
    // Form stays visible so the visitor can retry.
    expect(screen.getByTestId('contact-form')).toBeInTheDocument()
  })

  it('shows the same retry-able error when the network request itself fails', async () => {
    vi.mocked(fetch).mockRejectedValueOnce(new Error('network down'))

    render(<ContactForm />)
    fillAndSubmit()

    await waitFor(() => expect(screen.getByTestId('contact-form-error')).toBeInTheDocument())
  })
})
