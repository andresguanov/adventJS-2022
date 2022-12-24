function countHours(year: string, holidays: string[]): number {
  const daysToWork = holidays.filter(day => {
    const date = new Date(`${year}/${day}`)
    return date.getDay() > 0 && date.getDay() < 6
  })

  return daysToWork.length * 2
}
