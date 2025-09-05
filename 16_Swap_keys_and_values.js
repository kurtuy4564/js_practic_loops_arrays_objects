invertObject = obj => {
  const resObj = {}
  for (el in obj){
    resObj[obj[el]] = el
  }
  return resObj
}

// Вход:
const obj = { a: 'x', b: 'y', c: 'z' }

// Вызов:
const result = invertObject(obj)

console.log(result);

// Ожидаемый результат:
// { x: 'a', y: 'b', z: 'c' }
