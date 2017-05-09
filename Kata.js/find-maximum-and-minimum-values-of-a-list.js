// solving this with a sort
const min = function (list) {
  list.sort((a, b) => {
    return a - b
  })
  return list[0]
}

// solving this with a reduce
const max = function (list) {
  return list.reduce((acc, n) => acc > n ? acc : n)
}
