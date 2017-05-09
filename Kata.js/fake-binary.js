function fakeBin (x) {
    // split the string then map
  return x.split('').map(n => n < 5 ? 0 : 1).join('')
}   // if n is greater or equal to 5 return 0 if not return 1 then join the numbers into a string
