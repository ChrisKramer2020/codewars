const elimination = (arr) => {
  arr.sort()
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return arr[i]
    }
  }
  return null
}
