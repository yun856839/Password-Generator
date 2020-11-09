function generatePassword() {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // define dummy date
  const option = {
    length: '12',
    lowercase: 'on',
    uppercase: 'on',
    numbers: 'on',
    symbols: 'on',
    excludeCharacters: '04'
  }
  console.log('option', option)

  // create a collection to store things user picked up
  let collection = []

  if (option.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (option.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (option.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (option.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  // remove things user don't need ( filter, includes )
  if (option.excludeCharacters) {
    collection = collection.filter(character => !option.excludeCharacters.includes(character))
    // return !option.excludeCharacters.includes(character)
    // if (option.excludeCharacters.includes(character)) {
    //   return false
    // }
    // return true
  }
  console.log('collection', collection)

  // start generating password

  // return password
  console.log('this function will generate password.')
}
generatePassword()