function getGiftsToRefill(a1: string[], a2: string[], a3: string[]) {
  const a1Set = new Set(a1)
  const a2Set = new Set(a2)
  const a3Set = new Set(a3)
  const items = [...a1Set, ...a2Set, ...a3Set]
  
  const countItems = items.reduce((obj, item) => {
    obj[item] = (obj[item] || 0) +1
    return obj
  }, {})

  const aItems = Object.entries(countItems)

  return aItems.filter(el => el[1]===1).map(el => el[0])
}
