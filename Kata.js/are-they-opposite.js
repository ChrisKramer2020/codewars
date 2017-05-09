const isOpposite = (s1, s2) => {
  if (s1 === '') return false
  return s1
    .split('')
    .map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase())
    .join('') === s2 && s1 !== ''
}
