function fixLetter(letter: string) {
  // Dejar un espacio después de cada coma
  letter = letter.replace(/,/g, ", ")

  // Eliminar múltiples espacios en blanco y dejar sólo uno
  letter = letter.replace(/\s+/g, " ")

  // Quitar espacios antes de coma, punto, ? o !
  letter = letter.replaceAll(" ,", ",")
  letter = letter.replaceAll(" .", ".")
  letter = letter.replaceAll(" ?", "?")
  letter = letter.replaceAll(" !", "!")

  //Quitar signos de interrogación repetidos
  letter = letter.replace(/\?+/g, "?")

  //Mayúsculas al inicio de cada oración
  letter = letter.replace(/(^|[.?!])\s*(\w)/g, function (match, p1, p2) { return p1 + " " + p2.toUpperCase()})

  // Eliminar espacios al inicio y al final
  letter = letter.trim()

  // Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
  letter = letter.replace(/santa claus/gi, "Santa Claus")

  // Poner un punto al final de la frase si no tiene puntuación
  if (!letter.endsWith(".")
    && !letter.endsWith("?")
    && !letter.endsWith("!")) {
    letter += "."
  }

  return letter
}
