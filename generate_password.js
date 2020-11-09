// sample a element in collection
function sample(collection) {
  let randomIndex = Math.floor(Math.random() * collection.length)
  return collection[randomIndex]
}

function generatePassword() {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // define dummy date
  const options = {
    length: '12',
    lowercase: 'on',
    uppercase: 'on',
    numbers: 'on',
    // symbols: 'on',
    excludeCharacters: '40'
  }

  // create a collection to store things user picked up
  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  // remove things user don't need ( filter, includes )
  if (options.excludeCharacters) {
    collection = collection.filter(character => !options.excludeCharacters.includes(character))
    // return !option.excludeCharacters.includes(character)
    // if (option.excludeCharacters.includes(character)) {
    //   return false
    // }
    // return true
  }

  // start generating password 
  let password = ''
  for (let i = 1; i <= options.length; i++) {
    password += sample(collection)
  }
  console.log('password', password)


  // return password
  console.log('this function will generate password.')
}
generatePassword()