compactObject = obj => {
  const resObj = {}
  for (el in obj) {
    if (obj[el] || typeof obj[el] === 'boolean' || typeof obj[el] === 'number') {
      resObj[el] = obj[el]
    }

    // !obj[el] ?? (resObj[el] = obj[el])
  }
  return resObj
}

// Вход:
const obj = { a: 0, b: '', c: null, d: 'ok', e: undefined, f: false }

// Вызов:
const result = compactObject(obj)
console.log(result)

// Ожидаемый результат:
// { a: 0, d: 'ok', f: false }
