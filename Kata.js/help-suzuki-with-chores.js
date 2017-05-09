function choreAssignment (chores) {
  const s = chores.sort((a, b) => a - b),
    r = []
  while (s.length) {
    r.push(s.shift() + s.pop())
  }

  return r.sort((a, b) => a - b)
}
