"use client"
import { useState } from 'react'

// Simple client-side contact form that prefers Formspree (no backend).
// If you set NEXT_PUBLIC_FORMSPREE_ID in your environment, the form will
// POST directly to Formspree. Otherwise it will fall back to the existing
// `/api/contact` server route (if you keep it).
export default function Contact() {
  const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || ''

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'error'|'fallback'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const payload = { name, email, message }

    try {
      if (FORMSPREE_ID) {
        const endpoint = `https://formspree.io/f/${FORMSPREE_ID}`
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload),
        })

        if (!res.ok) {
          const data = await res.json().catch(() => ({}))
          setStatus('error')
          setErrorMsg(data?.error || `Formspree error ${res.status}`)
          return
        }

        setStatus('ok')
        setName('')
        setEmail('')
        setMessage('')
        return
      }

      // Fallback: try local server API route (if present). If that returns
      // 501 or fails, we fallback to mailto so an email still arrives.
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json().catch(() => ({}))
      if (res.status === 501 && data?.error === 'SMTP_NOT_CONFIGURED') {
        // fallback to mailto
        setStatus('fallback')
        const mail = `mailto:agrabska1994@gmail.com?subject=${encodeURIComponent('Kontakt z portfolio: '+name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`
        window.location.href = mail
        return
      }

      if (!res.ok) {
        setStatus('error')
        setErrorMsg(data?.error || 'Wystąpił błąd')
        return
      }

      setStatus('ok')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err: unknown) {
      setStatus('error')
      if (err instanceof Error) setErrorMsg(err.message)
      else setErrorMsg(String(err ?? 'Network error'))
    }
  }

  return (
    <section id="contact" className="container py-12">
      <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
      <p className="mb-4 text-zinc-600 dark:text-zinc-400">Masz pytanie lub chcesz współpracować? Napisz poniżej — wiadomość trafi na mój e-mail.</p>

      <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Imię</label>
          <input required value={name} onChange={e=>setName(e.target.value)} className="w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Wiadomość</label>
          <textarea required value={message} onChange={e=>setMessage(e.target.value)} rows={6} className="w-full rounded border px-3 py-2" />
        </div>

        <div className="flex items-center gap-4">
          <button type="submit" disabled={status==='sending'} className="rounded bg-zinc-900 text-white px-4 py-2 disabled:opacity-50">{status==='sending' ? 'Wysyłam...' : 'Wyślij'}</button>
          <a href="mailto:agrabska1994@gmail.com" className="text-sm text-zinc-600">Wyślij maila ręcznie</a>
        </div>

        {status === 'ok' && <p className="text-green-600">Wysłano — dziękuję! Sprawdzę wiadomość na moim mailu.</p>}
        {status === 'fallback' && <p className="text-yellow-600">Brak serwera — otwieram klienta pocztowego jako fallback.</p>}
        {status === 'error' && <p className="text-red-600">Błąd: {errorMsg}</p>}
      </form>

      
    </section>
  )
}

