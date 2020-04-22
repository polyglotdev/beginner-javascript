function calculateBill(tip) {
  const billBeforeTip = 100
  const salesTax = 1.13
  const totalBill = billBeforeTip + tip + salesTax
  return parseFloat(totalBill.toFixed(2))
}

calculateBill(10) /* ? */
console.log(`Your total bill is: ${calculateBill(10)}`)

// First Class Citizens
const math = (num1, num2) => num1 + num2
const add = () => math(2, 2)

add() /* ? */

function doctor(firstName) {
  return `Dr. ${firstName}`
}

doctor('Dom Hallan') /* ? */

const inchesToCentimeters = (inches) => inches * 2.54
inchesToCentimeters(12) /* ? */

const makeABaby = (first, last) => {
  return {
    name: `${first} ${last}`,
    age: 0,
  }
}

makeABaby('Elijah', 'Hallan') /* ? */
