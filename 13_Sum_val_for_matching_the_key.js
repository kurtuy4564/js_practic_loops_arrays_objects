sumMatchingKeys = (obj1, obj2) => {
  const resObj = {}
  for (el_1 in obj1) {
    for (el_2 in obj2) {
      console.log(el_1, el_2)

      if (el_1 === el_2) {
        resObj[el_1] = obj1[el_1] + obj2[el_2]
      } else {
        if (!(el_1 in resObj)) resObj[el_1] = obj1[el_1]
        if (!(el_2 in resObj)) resObj[el_2] = obj2[el_2]
      }
    }
  }
  return resObj
}

// Вход:
const obj1 = { a: 2, b: 3, c: 4 }
const obj2 = { b: 5, c: 1, d: 7 }

// Вызов:
const result = sumMatchingKeys(obj1, obj2)

console.log(result)

// Ожидаемый результат:
// { a: 2, b: 8, c: 5, d: 7 }
