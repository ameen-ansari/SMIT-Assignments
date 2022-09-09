// 1. Write a ts program to print all natural numbers from 1 to n. - using while loop
// var naturalnum:number = 1
// while (true) {
//     console.log(naturalnum);naturalnum++
// }

// 2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop
// var num:number = 0
// var muxnum:number = 12
// while(num < muxnum){
// console.log(muxnum);muxnum--
// }

// 3. Write a ts program to print all alphabets from a to z. - using while loop
// var alphabets:string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var a:number = 0
// while (a < 26) {
//     console.log(alphabets[a]);a++
// }

// 4. Write a ts program to print all even numbers between 1 to 100. - using while loop
// var num: number = 0
// while (num < 101) {
//   if (num % 2 == 0) {
//     console.log("even numbers = ",num);

//   }num++
// }
// 5. Write a ts program to print all odd number between 1 to 100.
// var num: number = 0
// while (num < 101) {
//   if (num % 2 != 0) {
//     console.log("odd numbers = ",num);

//   }num++
// }

// 6. Write a ts program to find sum of all natural numbers between 1 to n.
// var num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var num2 = 0
// var sum:number = 0
// while (num2 < num.length) {
//   var value = num[num2]
//   sum += value
//   num2++
//   console.log(sum);
// }

// 7. Write a ts program to find sum of all even numbers between 1 to n.
// var num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var num2 = 0
// var sum: number = 0
// while (num2 < num.length) {
//   if (num[num2] % 2 == 0) {
//     var value = num[num2]
//     sum += value
//     console.log(sum)
//   }
//   num2++
// }

// 8. Write a ts program to find sum of all even numbers between 1 to n.
// var num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var num2 = 0
// var sum: number = 0
// while (num2 < num.length) {
//   if (num[num2] % 2 != 0) {
//     var value = num[num2]
//     sum += value
//     console.log(sum)
//   }
//   num2++
// }

// 9. Write a ts program to print multiplication table of any number.
// var uservalue: any = prompt('which table')
// function table(num: any) {
//   for (let index: number = 1; index < 11; index++) {
//     console.log(`${num} x ${index} = ${num * index}`)
//   }
// }
// if (
//   uservalue == null ||
//   uservalue == undefined ||
//   uservalue == '0' ||
//   uservalue == ''
// ) {
//   while (uservalue == '') {
//     var uservalue: any = prompt('Please enter the value')
//   }
// }
// table(uservalue)

// 10. Write a ts program to count number of digits in a number.
function counter(a: string) {
  console.log(a.length)
}
var uservalue: any = prompt('Please enter the value')
counter(uservalue)
