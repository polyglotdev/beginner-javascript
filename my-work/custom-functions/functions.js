function calculateBill(tip) {
  const billBeforeTip = 100
  const salesTax = 1.13
  const totalBill = billBeforeTip + tip + salesTax
  return totalBill.toFixed(2)
}

calculateBill(10) /* ? */
