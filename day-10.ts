function checkJump(heights: number[]): boolean {
  const max = Math.max(...heights)
  const index = heights.findIndex(el => el === max)
  const left = heights.slice(0, index + 1)
  const right = heights.slice(index)

  if (left[0] === right[0]
    || left.length === 1
    || right.length === 1) {
    return false
  }

  const leftSort = [...left].sort((a, b) => a - b)
  const rightSort = [...right].sort((a, b) => b - a)

  const sorted = leftSort.concat(rightSort)

  return left.concat(right).every((el, i) => el === sorted[i])
}
