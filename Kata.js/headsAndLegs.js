function animals (heads, legs) {
  let cows = legs / 2 - heads
  let chickens = heads - cows

  if (cows < 0 || !Number.isInteger(cows) || chickens < 0 || !Number.isInteger(chickens)) {
    return 'No solutions'
  }
  return [chickens, cows]
}
