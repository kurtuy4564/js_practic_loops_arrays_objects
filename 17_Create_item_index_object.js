indexPositions = arr => {
  const resArr = {}

  arr.forEach((el, index) => {
    if (el in resArr) {
      resArr[el].push(index)
    } else {
      resArr[el] = []
      resArr[el].push(index)
    }
  })

  return resArr
}

// Вход:
const arr = ['a', 'b', 'a', 'c', 'b', 'a']

// Вызов:
const result = indexPositions(arr)

console.log(result)

// Ожидаемый результат:
// { a: [0, 2, 5], b: [1, 4], c: [3] }
