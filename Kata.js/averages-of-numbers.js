function averages (numbers) {
  if (!Array.isArray(numbers)) return []
  var arr = []
  for (var i = 0; i < numbers.length - 1; i++) {
    var result = (numbers[i] + numbers[i + 1]) / 2
    arr.push(result)
  }
  return arr
}
