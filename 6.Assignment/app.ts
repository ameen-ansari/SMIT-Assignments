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
// function counter(a: string) {
//   console.log(a.length)
// }
// var uservalue: string = prompt('Please enter the value')
// counter(uservalue)

// 11. Write a ts program to find first and last digit of a number.
// var uservalue: any = prompt('Please enter the value')
// function flind(num: string) {
//   console.log('First Index', num?.charAt(0))
//   let lengthofnum: number = num.length
//   console.log('las tindex', num?.charAt(lengthofnum - 1))
// }
// if (uservalue.length === 0) {
//     window.location.reload()
// }else{
//     flind(uservalue)
// }

// 12. Write a ts program to find sum of first and last digit of a number
// var uservalue: any = prompt('Please enter the value')
// function flind(num: string) {
//   let findex: number = Number(num?.charAt(0))
//   console.log('First Index', findex)
//   let lengthofnum: number = num.length
//   let lindex: number = Number(num?.charAt(lengthofnum - 1))
//   console.log('last Index',lindex)
//   console.log(`the sum of ${findex} + ${lindex} = ${findex+lindex}`)
// }
// if (uservalue.length === 0) {
//   window.location.reload()
// } else {
//   flind(uservalue)
// }

// 13. Write a ts program to swap first and last digits of a number. {in 2.5 hours}
// var user: any = prompt('Enter the value')
// function swap(value: any) {
//   for (let index = 0; index < user.length; index++) {
//     if (index == 0) {
//       value = user[user.length - 1]
//     } else if (index == user.length - 1) {
//       value += user[0]
//     } else {
//       value += user[index]
//     }
//   }
//   console.log(value)
// }
// swap(user)

// 14. Write a ts program to calculate sum of digits of a number.
// var user: any = prompt('Enter the value')
// var ans
// function sum(value: any) {
//   for (let index = 0; index < user.length; index++) {
//     if (index == 0) {
//       ans = Number(value[index])
//     } else {
//       ans += Number(value[index])
//     }
//   }
//   console.log(ans)
// }
// sum(user)

// 15. Write a ts program to calculate product of digits of a number.
// var user: any = prompt('Enter the value')
// var user:string = '44'
// var ans
// function findproduct(value: any) {
//   for (let index = 0; index < user.length; index++) {
//     if (index == 0) {
//       ans = Number(value[index])
//     } else {
//       ans *= Number(value[index])
//     }
//   }
//   console.log(ans)
// }
// findproduct(user)

// 16. Write a ts program to enter a number and print its reverse.
// var user: any = prompt('Enter the value')
// var ans:any;
// function reverse(a: string) {
//   var b = user.length - 1
//  for (let index = b; index > -1; index--) {
//   if (index == b) {
//     ans = a[index]
//   }else{
//     ans += a[index]
//   }
// }
// console.log(ans);
// }
// reverse(user)

// 17. Write a ts program to check whether a number is palindrome or not.
// var user: any = prompt('Enter the value')
// var ans:any;
// function palindrome(a: string) {
//   var b = user.length - 1
//  for (let index = b; index > -1; index--) {
//   if (index == b) {
//     ans = a[index]
//   }else{
//     ans += a[index]
//   }
// }
// if (ans === user) {
//   console.log('palindrome number');
// }else{
//   console.log('Not a palindrome number')
// }
// }
// palindrome(user)

// 18. Write a ts program to find frequency of each digit in a given integer.
var num = '8889'
var a = /\d+/g
// function frequency(a: any) {
//   let freq
//   var b = 0
//   for (var index = 0; index < a.length; index++) {
//     for (let inindex = 0; inindex < a.length; inindex++) {
//       if (a[index] == a[inindex]) {
//         if (a[inindex] != a[0]) {
//           console.log(a[inindex]);
//         }
//       }
//     }
//   }
// }
// frequency(num)
if (num.matchAll(a)) {
  console.log(num.match(a));
}else{
  console.log('nothing found');
}

