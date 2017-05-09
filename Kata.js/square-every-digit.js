function squareDigits (num) {
  let numString = num.toString()
  let results = []

  for (let i = 0; i < numString.length; i++) {
    results[i] = numString[i] * numString[i]
  }
  return Number(results.join(''))
}
