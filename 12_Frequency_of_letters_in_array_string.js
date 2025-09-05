letterFrequency = stringsArr => {
  const resultObj = {}

  stringsArr.forEach(word => {
    for (letter of word.split('')) {
      const letterLowerCase = letter.toLowerCase()
      resultObj[letterLowerCase] = (resultObj[letterLowerCase] || 0) + 1
    }
  })

  return resultObj
}

// Вход:
const strings = ['Hello', 'World']

// Вызов:
const result = letterFrequency(strings)

console.log(result)

// Ожидаемый результат:
// { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 };
