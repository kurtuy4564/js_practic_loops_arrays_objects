removeAll = (arr, value) => {
  return arr.filter(el => el !== value)
}

// Вход:
const arr = [1, 2, 3, 2, 4, 2]
const value = 2

// Вызов:
const result = removeAll(arr, value)

console.log(result)

// Ожидаемый результат:
// [1, 3, 4]
