// All dates are shown in Indian Standard Time, e.g. "12 Mar 2026".

const IST = 'Asia/Kolkata'
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DAY_MS = 24 * 60 * 60 * 1000

const istParts = new Intl.DateTimeFormat('en-US', {
  timeZone: IST,
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
})

type DateInput = Date | string | number

function toIstDay(value: DateInput): { year: number; month: number; day: number } {
  const date = value instanceof Date ? value : new Date(value)
  if (Number.isNaN(date.getTime())) {
    throw new RangeError('Invalid date')
  }
  const parts = istParts.formatToParts(date)
  const read = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value)
  return { year: read('year'), month: read('month'), day: read('day') }
}

/** "12 Mar 2026" */
export function formatDate(value: DateInput): string {
  const { year, month, day } = toIstDay(value)
  return `${day} ${MONTHS[month - 1]} ${year}`
}

/** "Today", "Yesterday", "3 days ago" — falls back to the full date after 30 days. */
export function formatRelativeDay(value: DateInput, now: DateInput = new Date()): string {
  const then = toIstDay(value)
  const today = toIstDay(now)
  const days = Math.round(
    (Date.UTC(today.year, today.month - 1, today.day) -
      Date.UTC(then.year, then.month - 1, then.day)) /
      DAY_MS,
  )
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days > 1 && days <= 30) return `${days} days ago`
  return formatDate(value)
}
