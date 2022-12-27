function checkStepNumbers(systemNames: string[], stepNumbers: number[]) {
  const hash: Map<string, number> = new Map()

  for (let i = 0; i < systemNames.length; i++) {
    const currentSystem = systemNames[i]
    const currentStep = stepNumbers[i]
    if (!hash.has(currentSystem)) {
      hash.set(currentSystem, currentStep)
    } else if (currentStep <= hash.get(currentSystem)) {
      return false
    } else if (currentStep >= hash.get(currentSystem)) {
      hash.set(currentSystem, currentStep)
    }
  }

  return true
}
