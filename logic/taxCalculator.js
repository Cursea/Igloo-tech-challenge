const taxCalculator = (grossSalary) => {
  const taxBrackets = [
    { rate: 0, floor: 0, ceiling: 12500 },
    { rate: 0.2, floor: 12501, ceiling: 50000 },
    { rate: 0.4, floor: 50001, ceiling: 150000 },
    { rate: 0.45, floor: 150001, ceiling: Infinity },
  ]

  let taxPerBracket = []

  taxBrackets.forEach((bracket) => {
    if (grossSalary > bracket.ceiling) {
      taxPerBracket.push((bracket.ceiling - bracket.floor) * bracket.rate)
    }

    if (grossSalary >= bracket.floor && grossSalary <= bracket.ceiling) {
      taxPerBracket.push((grossSalary - bracket.ceiling) * bracket.rate)
    }
  })

  const payableTax = taxPerBracket.reduce((total, amount) => (total += amount))
  const netSalary = grossSalary - payableTax

  return { GrossSalary: grossSalary, NetSalary: netSalary}
}

module.exports = taxCalculator