findByCriteria = (items, criteria) => {
  const keysCriteria = []

  for (el in criteria) {
    keysCriteria.push(el)
  }

  console.log(keysCriteria)

  for (item of items) {
    let numRight = keysCriteria.length

    for (el of keysCriteria) {
      if (item[el] === criteria[el]) 
        numRight--
    }

    if (numRight === 0) 
      return item
  }

  return null
}

// Вход:
const items = [
  { name: 'A', type: 'tool', active: true },
  { name: 'B', type: 'tool', active: false },
  { name: 'C', type: 'part', active: true },
]
const criteria = { type: 'tool', active: true }

// Вызов:
const result = findByCriteria(items, criteria)

console.log(result)

// Ожидаемый результат:
// { name: 'A', type: 'tool', active: true }
