interface Gift {
  name: string
  quantity: number
}

function printTable(gifts: Gift[]) {
  const giftMap: number[] = gifts.map(el => el.name.length)
  const quantityMap: number[] = gifts.map(el => String(el.quantity).length)

  const gift: number = Math.max(...giftMap, "Gift".length)
  const quantity: number = Math.max(...quantityMap, "Quantity".length)

  const lineUp: string = "+".repeat(gift + quantity + 7)
  const header: string = `| ${"Gift".padEnd(gift)} | ${"Quantity".padEnd(quantity)} |`
  const lineHeader: string = `| ${"-".repeat(gift)} | ${"-".repeat(quantity)} |`
  const contentMap: string[] = gifts.map((obj): Gift =>
      `| ${obj.name.padEnd(gift)} | ${String(obj.quantity).padEnd(quantity)} |`
  )
  const lineDown: string = "*".repeat(gift + quantity + 7)
  const content: string = contentMap.join("\n")
  return `${lineUp}\n${header}\n${lineHeader}\n${content}\n${lineDown}`
}
