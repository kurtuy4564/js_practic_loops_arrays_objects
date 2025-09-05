intersection = (arr1, arr2) => {
  const resArr = []
  for (el of arr1) {
    let resVal = arr2.find(num => num == el)
    if (resVal) resArr.push(resVal)
  }
  return [...new Set(resArr)] 
}

// Вход:
const arr1 = [1, 2, 3, 4, 4]
const arr2 = [3, 4, 4, 5, 6]

// Вызов:
const result = intersection(arr1, arr2)
console.log(result)

// Ожидаемый результат:
// [3, 4]
