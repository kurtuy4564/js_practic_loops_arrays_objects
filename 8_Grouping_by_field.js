groupBy = (items, key) => {
  const arrKey = [...new Set(items.map(el => el[key]))]
  const resObj = {}

  for (el of arrKey) {
    for (item of items) {      
      if (el === item[key]) {
        if (!(el in resObj)) resObj[el] = []
        resObj[el].push(item)
      }
    }
  }

  return resObj
}

// Вход:
const items = [
  { city: 'Moscow', name: 'Иван' },
  { city: 'SPb', name: 'Оля' },
  { city: 'Moscow', name: 'Анна' },
]
const key = 'city'

// Вызов:
const result = groupBy(items, key)
console.log(result)

// Ожидаемый результат:
// {
//   Moscow: [
//     { city: 'Moscow', name: 'Иван' },
//     { city: 'Moscow', name: 'Анна' },
//   ],
//   SPb: [{ city: 'SPb', name: 'Оля' }],
// }
