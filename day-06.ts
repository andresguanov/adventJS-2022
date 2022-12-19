function createCube(size: number): string {
  let cube: string = ''
  for(let i =1; i<=size; i++){
    const spaces = " ".repeat(size - i)
    const triangle = "/\\".repeat(i)
    const cubeFront = "_\\".repeat(size)

    cube += `${spaces}${triangle}${cubeFront}\n`

  }

  for(let i =0; i<size; i++){
    const spaces = " ".repeat(i)
    const triangle = "\\/".repeat(size - i)
    const cubeFront = "_/".repeat(size)

    cube += `${spaces}${triangle}${cubeFront}\n`

  }
  return cube.slice(0,-1)
}
