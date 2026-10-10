import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
        <Logo />
      </header>

      <main className="mx-auto max-w-2xl px-4 pb-16 pt-6 sm:px-6">
        <div className="rounded-card bg-white p-6 text-center shadow-card sm:p-8">
          <h1 className="text-2xl font-bold">We could not find that page</h1>
          <p className="mt-2 text-muted">The link may be old, or the address may have a typing mistake.</p>
          <Link
            to="/"
            className="mt-6 inline-flex min-h-tap w-full items-center justify-center rounded-xl bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-hover sm:w-auto"
          >
            Go to the start page
          </Link>
        </div>
      </main>
    </div>
  )
}
