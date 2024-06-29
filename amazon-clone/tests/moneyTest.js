import formatCurrency from "../scripts/utils/money.js";

//group of same type of tests that is test suite

console.log("test suite: formateCurrency")

console.log('converts cents into dollars')
if (formatCurrency(2095) === '20.95'){
  console.log('passed');
}else{
  console.log('failed')
}

console.log('works with zero') //code works with zero
if (formatCurrency(0) === '0.00'){
  console.log('passed');
}else{
  console.log('failed')
}

console.log('rounds up to the nearest cent')//code rounds up to the nearest cent or it rounds up to the nearest cent

if (formatCurrency(2000.5) === '20.01'){
  console.log('passed');
}else{
  console.log('failed')
}