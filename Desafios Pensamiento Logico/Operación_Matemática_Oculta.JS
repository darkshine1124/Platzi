//Encuentra la lógica de las siguientes operaciones y números:

//5 + 4 = 19
//8 + 2 = 610
//10 + 8 = 218
//12 + 9 = 321
//18 + 2 = 1620
//21 + 5 = 1626
export function solution(num1, num2) {
  return parseInt( `${num1-num2}${num1+num2}`)
}