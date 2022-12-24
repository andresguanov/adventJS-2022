function getFilesToBackup(
  lastBackup: number,
  changes: [number, number][]
): number[] {

  const changesFiltered = changes.filter(el => el[1] > lastBackup)
  const filesID = changesFiltered.map(el => el[0])
  const files = [...new Set(filesID)]
  return files.sort((a, b) => a - b)
}
