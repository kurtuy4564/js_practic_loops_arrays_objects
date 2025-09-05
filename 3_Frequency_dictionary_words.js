wordFreq = words => {
  const resObj = {}

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    resObj[word] = word in resObj ? resObj[word] + 1 : (resObj[word] = 1)
  }

  return resObj
}

// Вход:
const words = ['кот', 'пёс', 'кот', 'кот', 'пёс', 'белка']

// Вызов:
const result = wordFreq(words)

console.log(result)

// Ожидаемый результат:
//{ кот: 3, пёс: 2 }