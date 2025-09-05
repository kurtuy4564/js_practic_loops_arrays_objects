chunkArray = (arr, size) => {
  const resArr = []
  let subArray = []

  arr.forEach((el, index) => {
    subArray.push(el)
    console.log(subArray)

    if ((index + 1) % size === 0) {
      resArr.push(subArray)
      subArray = []
    }
    if (index + 1 === arr.length) resArr.push(subArray)
  })

  return resArr
}

// Вход:
const arr = [1, 2, 3, 4, 5]
const size = 2

// Вызов:
const result = chunkArray(arr, size)

console.log(result)

// Ожидаемый результат:
// [[1, 2], [3, 4], [5]]
