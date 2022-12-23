type Led = (0 | 1)

function countTime(leds: Led[]) {
  let time = 0
  const mapLeds = (led: Led, i: number) => {
    let isValid = typeof leds[i - 1] !== 'undefined'
    let prevLed = isValid ? leds[i - 1] : leds[leds.length - 1]

    const bool = led === 0 && prevLed === 1
    return bool ? 1 : led
  }

  const bool = (leds: Led[]) => (
    !leds.every(led => led === 1)
  )

  while (bool(leds)) {
    leds = leds.map(mapLeds)
    time += 7
  }

  return time
}