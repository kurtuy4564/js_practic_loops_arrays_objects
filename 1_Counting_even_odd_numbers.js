countEvenOdd = nums => {
  const evenNumbers = nums.filter(num => num % 2 !== 1)
  const oddNumbers = nums.filter(num => num % 2 === 1)
  
  return {
    even: evenNumbers.length,
    odd: oddNumbers.length,
  }
}

const nums = [1, 2, 3, 4, 5, 6, 7]

const result = countEvenOdd(nums)

console.log(result)

// Ожидаемый результат:
// { even: 3, odd: 3 }
