import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import SignInOptions from '../components/SignInOptions'

export default function Login() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
        <Logo />
      </header>

      <main className="mx-auto max-w-2xl px-4 pb-16 pt-6 sm:px-6">
        <div className="rounded-card bg-white p-6 shadow-card sm:p-8">
          <h1 className="text-2xl font-bold">Sign in</h1>
          <p className="mt-2 text-muted">
            Use your Google account, or try the demo as a patient, a doctor or a lab.
          </p>
          <div className="mt-6">
            <SignInOptions />
          </div>
        </div>

        <Link
          to="/"
          className="mt-4 inline-flex min-h-tap items-center gap-2 rounded-xl px-2 font-semibold text-primary hover:text-primary-hover"
        >
          <ArrowLeft aria-hidden="true" className="h-5 w-5" />
          Back to start
        </Link>
      </main>
    </div>
  )
}
