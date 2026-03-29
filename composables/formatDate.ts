import { format } from 'date-fns'
import { de } from 'date-fns/locale'

export const formatDate = (value: string | number | Date) => {
  if (!value) return ''
  const date = typeof value === 'string' || typeof value === 'number' ? new Date(value) : value
  return format(date, 'd. MMMM yyyy | HH:mm', { locale: de })
}
