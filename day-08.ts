type IsPalindrome = (letters: string[]) => boolean

function checkPart(part: string): boolean {
  const isPalindrome: IsPalindrome = (letters) => {
    const word = letters.join('')
    const reverseWord = letters.reverse().join("")
    return word === reverseWord
  }

  const word = part.split("")
  if (isPalindrome(word)) return true

  return word.some((_, i) => {
    const newWord = [...word.slice(0, i), ...word.slice(i + 1)]
    const bool = isPalindrome(newWord)
    return bool
  })
}
