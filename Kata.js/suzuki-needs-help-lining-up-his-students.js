function lineupStudents (students) {
  students = students.trim().split(' ')
  return students.sort((a, b) => {
    if (a.length === b.length) {
      if (a < b) { return 1 } else { return -1 }
    }

    if (a.length < b.length) { return 1 } else { return -1 }
  })
  return students
}
