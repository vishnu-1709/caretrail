import { describe, expect, it } from 'vitest'
import { formatDate, formatRelativeDay } from './dates'

describe('formatDate', () => {
  it('formats as day, short month, year', () => {
    expect(formatDate('2026-03-12T06:00:00Z')).toBe('12 Mar 2026')
  })

  it('uses "Sep", not "Sept"', () => {
    expect(formatDate('2026-09-05T06:00:00Z')).toBe('5 Sep 2026')
  })

  it('uses the Indian calendar day, not the UTC day', () => {
    // 8:00 pm UTC on 11 Mar is already 1:30 am on 12 Mar in India.
    expect(formatDate('2026-03-11T20:00:00Z')).toBe('12 Mar 2026')
  })

  it('rejects an invalid date', () => {
    expect(() => formatDate('not a date')).toThrow(RangeError)
  })
})

describe('formatRelativeDay', () => {
  const now = '2026-03-12T06:00:00Z'

  it('says Today and Yesterday', () => {
    expect(formatRelativeDay('2026-03-12T01:00:00Z', now)).toBe('Today')
    expect(formatRelativeDay('2026-03-11T06:00:00Z', now)).toBe('Yesterday')
  })

  it('counts days for the last month', () => {
    expect(formatRelativeDay('2026-03-09T06:00:00Z', now)).toBe('3 days ago')
    expect(formatRelativeDay('2026-02-10T06:00:00Z', now)).toBe('30 days ago')
  })

  it('shows the full date for older or future days', () => {
    expect(formatRelativeDay('2026-01-26T06:00:00Z', now)).toBe('26 Jan 2026')
    expect(formatRelativeDay('2026-03-20T06:00:00Z', now)).toBe('20 Mar 2026')
  })
})
