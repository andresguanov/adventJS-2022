interface Box {
  l: number
  w: number
  h: number
}

function fitsInOneBox(boxes: Box[]) {
  let wCurrent = 0
  let hCurrent = 0

  return boxes
    .sort((a, b) => a.l - b.l)
    .every(box => {
      let condition = box.w > wCurrent & box.h > hCurrent
      wCurrent = box.w
      hCurrent = box.h
      return condition
    })
}
