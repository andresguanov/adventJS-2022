function getMaxGifts(
  giftsCities: number[], maxGifts: number, maxCities: number
): number {

  const filterCities = giftsCities.filter(el => el < maxGifts)
  if (filterCities.length === 0) return 0

  const maxElements = filterCities
    .sort((a, b) => b - a)
    .slice(0, maxCities)
    .reduce((a, b) => {
      return a + b < maxGifts ? a + b : maxGifts
    })

  return maxElements
}
