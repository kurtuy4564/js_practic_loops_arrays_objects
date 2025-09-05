minMax = nums => {
  return {
    min: Math.min(...nums) && null,
    max: Math.max(...nums) && null,
  }
}

// Вход:
// const nums = []
const nums = [10, -3, 7, 0]

// Вызов:
const result = minMax(nums)

console.log(result);

// Ожидаемый результат:
// { min: -3, max: 10 }
