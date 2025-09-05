sumByKey = (items, key) => {
  const arrKey = items.filter(el => el[key] && typeof el[key] === 'number')
  const arrNums = arrKey.map(el => el.price)
  return arrNums.reduce((sum, num) => sum + num, 0)
}

// Вход:
const items = [{ price: 100 }, { cost: 50 }, { price: 70 }, { price: 'NaN' }]
const key = 'price'

// Вызов:
const result = sumByKey(items, key)

console.log(result)

// Ожидаемый результат: 170
