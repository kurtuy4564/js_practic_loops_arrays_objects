manualReverse = arr => {
  const arrRevers = []
  for (let i = arr.length - 1; i >= 0; i--) {
    arrRevers.push(arr[i])
  }
  return arrRevers
}

// Вход:
const arr = [1, 2, 3, 4]

// Вызов:
const result = manualReverse(arr)

console.log(result)

// Ожидаемый результат:
// [4, 3, 2, 1]
