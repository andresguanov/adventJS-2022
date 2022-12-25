function sortToys(toys: string[], positions: number[]) {
  return toys
    .map((el, i) => [el, positions[i]])
    .sort((a, b) => Number(a[1]) - Number(b[1]))
    .map(el => el[0])
}
