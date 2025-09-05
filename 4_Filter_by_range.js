filterRange = (nums, min, max) => {
  return nums.filter(num => min <= num && num <= max )
}

// Вход:
const nums = [5, 1, 9, 3, 7]
const min = 3
const max = 7

// Вызов:
const result = filterRange(nums, min, max)

console.log(result);

// Ожидаемый результат:
// [5, 3, 7]
