function dryNumber(dry: number, numbers: number): number[] {
  return new Array(numbers)
    .fill(0)
    .map((el, i) => String(i+1))
    .filter(el => (el).includes(String(dry)))
    .map(el => parseInt(el))
}
