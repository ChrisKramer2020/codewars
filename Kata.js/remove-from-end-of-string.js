function remove (str) {
  return str.endsWith('!')
  ? str.slice(0, str.length - 1)
  : str
}
remove('!Hi!') === '!Hi'
