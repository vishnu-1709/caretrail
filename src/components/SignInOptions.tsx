import { FlaskConical, Info, LogIn, Stethoscope, User } from 'lucide-react'
import { useState } from 'react'
import Button from './Button'

const iconClass = 'h-5 w-5 shrink-0'

/**
 * The three demo buttons and Google sign-in.
 * Sign-in is connected in Phase 3; until then each button explains that it is not ready yet.
 */
export default function SignInOptions() {
  const [notice, setNotice] = useState('')

  const notReady = () => setNotice('Sign-in is not switched on yet. Please check back soon.')

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-3">
        <Button onClick={notReady} icon={<User aria-hidden="true" className={iconClass} />}>
          Try as Patient
        </Button>
        <Button onClick={notReady} icon={<Stethoscope aria-hidden="true" className={iconClass} />}>
          Try as Doctor
        </Button>
        <Button onClick={notReady} icon={<FlaskConical aria-hidden="true" className={iconClass} />}>
          Try as Lab
        </Button>
      </div>

      <div className="mt-3">
        <Button
          variant="secondary"
          onClick={notReady}
          icon={<LogIn aria-hidden="true" className={iconClass} />}
        >
          Sign in with Google
        </Button>
      </div>

      <div aria-live="polite" className="mt-3 min-h-6">
        {notice && (
          <p className="flex items-start gap-2 rounded-xl bg-primary-soft px-4 py-3 text-left text-ink">
            <Info aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span>{notice}</span>
          </p>
        )}
      </div>
    </div>
  )
}
