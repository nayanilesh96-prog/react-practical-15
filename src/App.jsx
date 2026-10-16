import { useState } from 'react'
import './App.css'

function App() {
  const [submittedCredentials, setSubmittedCredentials] = useState(null)

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    setSubmittedCredentials({
      username: String(formData.get('username') ?? ''),
      password: String(formData.get('password') ?? ''),
    })
  }

  return (
    <main className="page">
      <section className="login-card" aria-labelledby="login-title">
        <div className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none">
            <path
              d="M7 16.5 13.2 23 25 9"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
        </div>

        <p className="eyebrow">UNCONTROLLED FORM</p>
        <h1 id="login-title">Welcome back</h1>
        <p className="intro">Enter your details to sign in to your account.</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Your username"
              autoComplete="username"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Your password"
              autoComplete="current-password"
              required
            />
          </div>

          <button type="submit">Sign in</button>
        </form>

        {submittedCredentials && (
          <section className="submission" aria-live="polite">
            <h2>Submitted information</h2>
            <dl>
              <div>
                <dt>Username</dt>
                <dd>{submittedCredentials.username}</dd>
              </div>
              <div>
                <dt>Password</dt>
                <dd>{submittedCredentials.password}</dd>
              </div>
            </dl>
          </section>
        )}
      </section>
      <p className="page-note">A simple demo of form submission in React</p>
    </main>
  )
}

export default App
