export function CalcualteFutureValue({
  InitialInvestment,
  AnnualInvestment,
  ExpectedReturn,
  Duration,
}) {
  const annualData = [];
  let investmentValue = InitialInvestment;

  for (let i = 0; i < Duration; i++) {
    const interestEarnedInYear = investmentValue * (ExpectedReturn / 100);
    investmentValue += interestEarnedInYear + AnnualInvestment;

    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // investment value at the end of the year
      annualInvestment: AnnualInvestment, // investment added this year
      valueEndOfYear: investmentValue,
      
    });
  }

  return annualData;
}

export const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
