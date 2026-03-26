export const getNextSevenDays = () => {
  const days = []
  const now = new Date()

  for (let i = 0; i < 7; i++) {
    const date = new Date()
    date.setDate(now.getDate() + i)
    const weekday = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(date)
    days.push(weekday)
  }
  return days
}
