const rate = +prompt("Введите процентную ставку") / 100 / 12;
const firstPaymentSum = +prompt("Введите сумму первоначального взноса");
const creditSum = +prompt("Введите сумму кредита");

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const expirationDate = new Date(prompt("Введите дату окончания кредита"));
const expirationMonth = expirationDate.getMonth();
const expirationYear = expirationDate.getFullYear();

const returnSum = creditSum - firstPaymentSum;
const creditPeriod = (expirationYear - currentYear) * 12 + (expirationMonth - currentMonth) + 1;
const monthPaymentSum = returnSum * (rate + (rate / (((1 + rate) ** creditPeriod) - 1 )));
const totalSum = monthPaymentSum * creditPeriod;
alert(totalSum.toFixed(2));

