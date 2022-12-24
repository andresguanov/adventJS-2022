function getCompleted(part: string, total: string): string {
  const getSeconds = (time: string) => {
    const [hours, minutes, seconds] = time.split(":").map(el => Number(el))
    const totalSeconds = hours*3600 + minutes*60 + seconds

    return totalSeconds
  }

  const partTime = getSeconds(part) 
  const totalTime = getSeconds(total)

  const greatestCommonDivisor = (a: number, b:number): number => {
    return b === 0 ? a : greatestCommonDivisor(b, a % b)
  }
  const divisor = greatestCommonDivisor(partTime, totalTime)

  return `${partTime/divisor}/${totalTime/divisor}`
}
