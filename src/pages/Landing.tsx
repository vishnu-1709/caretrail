import type { LucideIcon } from 'lucide-react'
import { ClipboardPlus, ShieldCheck, UserCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import SignInOptions from '../components/SignInOptions'

type Step = {
  icon: LucideIcon
  title: string
  text: string
}

const steps: Step[] = [
  {
    icon: ClipboardPlus,
    title: 'Your doctors and labs add your records',
    text: 'Each visit, medicine and test result is saved for you when it happens. You hardly have to do anything.',
  },
  {
    icon: UserCheck,
    title: 'You choose who can see them',
    text: 'Approve a doctor with one tap, remove access any time, and see everyone who has looked.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety checks look out for you',
    text: 'Doctors are warned about medicine clashes, allergies and repeat tests before they prescribe.',
  },
]

export default function Landing() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Logo />
        <Link
          to="/login"
          className="inline-flex min-h-tap items-center rounded-xl px-4 font-semibold text-primary hover:text-primary-hover"
        >
          Sign in
        </Link>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <section className="mx-auto max-w-2xl pt-8 text-center sm:pt-14">
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl sm:leading-tight">
            All your health records in one safe place
          </h1>
          <p className="mt-4 text-lg text-muted">
            Your doctors and labs keep your record up to date. You decide who can see it.
          </p>

          <div className="mt-8">
            <SignInOptions />
          </div>
        </section>

        <section aria-labelledby="how-it-works" className="mt-12 sm:mt-16">
          <h2 id="how-it-works" className="text-center text-2xl font-bold">
            How it works
          </h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-card bg-white p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                    <step.icon aria-hidden="true" className="h-7 w-7" />
                  </span>
                  <span className="font-semibold text-muted">Step {index + 1}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="border-t border-line bg-white">
        <p className="mx-auto max-w-5xl px-4 py-6 text-center text-muted sm:px-6">
          This is a demo. All people, hospitals and health records shown here are made up.
        </p>
      </footer>
    </div>
  )
}
