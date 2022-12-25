function carryGifts(gifts: string[], maxWeight: number): string[] {
  if (gifts[0].length > maxWeight) return []

  let newGifts: string[] = []
  let bolsa = 0
  let arrBolsa: string[] = []

  for (let i = 0; i < gifts.length; i++) {
    const gift = gifts[i]
    const weight = bolsa + gift.length
    if (weight > maxWeight) {
      newGifts.push(arrBolsa.join(" "))
      arrBolsa = []
      bolsa = 0
    }
    arrBolsa.push(gift)
    bolsa += gift.length
  }

  newGifts.push(arrBolsa.join(" "))

  return newGifts
}
