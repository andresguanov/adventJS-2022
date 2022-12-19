function distributeGifts(packOfGifts: string[], reindeers: string[]): number {
  const chargeOfReindeers = reindeers.reduce(
    (acum, reindeer) => (acum + reindeer.length),
    0
  )
  const chargeOfGifts = packOfGifts.reduce((acum, gift) => 
    (acum + gift.length),
     0
  )
  return Math.floor(chargeOfReindeers * 2 / chargeOfGifts)
}
