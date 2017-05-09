function stringClean (s) {
  if (typeof s === 'string') return s.replace(/\d+/g, '')
  console.log(arguments.callee.name + ': Argument must be string!')
}
