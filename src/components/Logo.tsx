import { HeartPulse } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="inline-flex items-center gap-2 rounded-lg text-ink">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
        <HeartPulse aria-hidden="true" className="h-5 w-5" />
      </span>
      <span className="text-xl font-bold">CareTrail</span>
    </Link>
  )
}
