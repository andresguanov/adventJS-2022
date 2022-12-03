function wrapping(gifts) { 
  const wrap: string = '*'
  return gifts.map(gift => {
    const wrapper: string = wrap.repeat(gift.length + 2)
    return `${wrapper}\n${wrap}${gift}${wrap}\n${wrapper}`
  })
}
