interface Sleigh {
  name: string
  consumption: number
}

function selectSleigh(distance: number, sleighs: Sleigh[]): string | null {
  const filtered = sleighs.filter(el => el.consumption * distance <= 20)
  const lastSleigh = filtered[filtered.length - 1]
  return lastSleigh ? lastSleigh.name : null
}
