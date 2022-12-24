function decorateTree(base: string): string[] {

  const adornos = ['B', 'R', 'P']
  const baseArr = base.split(" ")
  let tree = new Array(baseArr.length).fill([])
  let treeLevel = baseArr

  tree = tree.map((arr, i) => {
    const level = [...treeLevel]

    treeLevel = treeLevel.map((el, i) => {

      if (el === treeLevel[i + 1]) {
        return el
      } else {
        const adorno = adornos.filter(elem => (
          ![treeLevel[i], treeLevel[i + 1]].includes(elem)
        ))
        return adorno[0]
      }

    })

    treeLevel.pop()
    return level
  })

  return tree.reverse().map(el => el.join(" "))
}
