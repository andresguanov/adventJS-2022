
type ReindeerType = 'Nuclear' | 'Electric' | 'Gasoline' | 'Diesel'

interface ReindeerWeight {
  type: ReindeerType
  weightCapacity: number
}

interface Gift {
  country: string
  weight: number
}

interface ReindeerCount {
  type: ReindeerType
  num: number
}

interface ReindeerGift {
  country: string
  reindeers: ReindeerCount[]
}

function howManyReindeers(reindeerTypes: ReindeerWeight[], gifts: Gift[]) {
  // Sort reindeerTypes by weightCapacity
  reindeerTypes.sort((a,b) => b.weightCapacity - a.weightCapacity)
  
  const getReindeers = (weight: number): ReindeerCount[] => {
    // reindeerTypes: howManyReindeers scope
    const reindeerCount: ReindeerCount[] = []
    const filterTypes = reindeerTypes.filter(el => el.weightCapacity < weight)
    let weightCapacities: number[] = filterTypes.map(el => el.weightCapacity)
    let accumulator: number = 0

    for (const {type: reindeerType} of filterTypes) {
      const sumCapacities: number = weightCapacities.reduce((acc, w) => acc + w)
      const neededReindeers = Math.floor(weight / sumCapacities)

      accumulator += neededReindeers
      weight %= sumCapacities

      reindeerCount.push({
        type: reindeerType,
        num: accumulator,
      })

      weightCapacities.shift()
    }

    return reindeerCount
  }

  const reindeers: ReindeerGift[] = gifts.map(({country, weight}) => {
    return {
      country,
      reindeers: getReindeers(weight)
    }
  })

  return reindeers
}