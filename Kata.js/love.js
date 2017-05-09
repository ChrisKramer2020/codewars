function howMuchILoveYou (nbPetals) {
  const love = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all'
  ]

  return love.slice(nbPetals % love.length - 1)[0]
}
