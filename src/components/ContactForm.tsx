import { useState, type FormEvent } from 'react'
import { site } from '../content/site'
import '../styles/contact.css'

type Status = 'idle' | 'sending' | 'success' | 'error'

/**
 * Submits straight to Web3Forms (US-9 pattern: no backend needed on
 * GitHub Pages) rather than a mailto link, so the delivery address never
 * appears in the page source — the author's explicit privacy requirement.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.set('access_key', site.web3FormsAccessKey)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      const result = await response.json()

      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form__success" data-testid="contact-form-success" role="status">
        <strong>Thanks, got it.</strong>
        <br />
        I'll get back to you soon.
      </div>
    )
  }

  const sending = status === 'sending'

  return (
    <form className="contact-form" onSubmit={handleSubmit} data-testid="contact-form">
      {/* Honeypot: hidden from real visitors, bots tend to fill every field */}
      <input type="checkbox" name="botcheck" className="visually-hidden" tabIndex={-1} autoComplete="off" />

      <div className="contact-form__field">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" placeholder="Your name" required autoComplete="name" />
      </div>
      <div className="contact-form__field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          autoComplete="email"
        />
      </div>
      <div className="contact-form__field contact-form__field--full">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows={4} placeholder="What's up?" required />
      </div>

      <div className="contact-form__actions">
        <button
          type="submit"
          className="pill-button pill-button--accent"
          disabled={sending}
          data-testid="contact-form-submit"
        >
          {sending ? 'Sending…' : 'Send message'}
        </button>
        {status === 'error' ? (
          <p className="contact-form__error" role="alert" data-testid="contact-form-error">
            Something went wrong. Try again, or reach out on LinkedIn/GitHub below.
          </p>
        ) : null}
      </div>
    </form>
  )
}
