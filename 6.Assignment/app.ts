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
// var num:any = prompt('Enter the complete number')
// var value:any = prompt('Frequent number')
// function freq(n: number, d: number) {
//   let c = 0
//   while (n > 0) {
//     if (n % 10 == d) {
//       c++
//     }
//     n = parseInt(n / 10)
// }
// console.log(c,"Times Repeate");
// }
// freq(num , value)
// 19. Write a ts program to enter a number and print it in words.
// {let num: string | null = prompt('Enter The Number')
// function toWordFunc(a: string) {
//   for (let index = 0; index < a.length; index++) {
//     const valueindex = a[index]
//     if (valueindex == '1') {
//       console.log('One')
//     } else if (valueindex == '2') {
//       console.log('Two')
//     } else if (valueindex == '3') {
//       console.log('Three')
//     } else if (valueindex == '4') {
//       console.log('Four')
//     } else if (valueindex == '5') {
//       console.log('Five')
//     } else if (valueindex == '6') {
//       console.log('Six')
//     } else if (valueindex == '7') {
//       console.log('Seven')
//     } else if (valueindex == '8') {
//       console.log('Eight')
//     } else if (valueindex == '9') {
//       console.log('Nine')
//     } else {
//       console.log('Zero')
//     }
//   }
// }}
// numtoword(num)}
// 20. Write a ts program to print all ASCII character with their values.
// {var num: any = prompt('Enter the word here')
// function numtoword(a: string) {
//   var b = a.charCodeAt()
//   console.log(b)
// }

// 21. Write a ts program to find power of a number using for loop.

// export {}
//         {
//   let num1: string | null = prompt('Enter The Number')
//   let num2: string | null = prompt('Enter The Power of Number')
//   let powerFinder = (a:any, b:any) => {
//     let index:number = 1
//     let ans:number = 0;
//     while (index < b) {
//       if (index == 1) {
//         ans = a * a
//       } else {
//         ans = ans * a
//       }
//       index++
//     }
//     console.log(ans);
//     return ans
//   }
//   powerFinder(num1,num2)
// }

// 22. Write a ts program to find all factors of a number.
// {
//   let num: string | null = prompt('Enter The Number')
//   let findFactor = (a: any) => {
//     let index: number = 0
//     while (index <= a) {
//       if (a % index == 0) {
//         console.log(index)
//       }
//       index++
//     }
//   }
//   findFactor(num)
// }

// 23. Write a ts program to calculate factorial of a number.
// {
//   let num: string | null = prompt('Enter The Number')
//   let findFactorial = (a: any) => {
//     let index: number = 0
//     let ans: number = 0
//     while (index <= a) {
//       ans = ans +index
//       index++
//     }
//     console.log(ans);
//   }
//   findFactorial(num)
// }
// 24. Write a ts program to find HCF (GCD) of two numbers.
// {
//   let num1: string | null = prompt('Enter The Number')
//   let num2: string | null = prompt('Enter The Number')
//   let findLCM = (a: any, b: any) => {
//     let arr1:any[] = []
//     let arr2:any[] = []
//     let arr3:any[] = []
//     let index1:number;
//     let index2:number;
//     let index3:number;
//     for (index1 = 2 ; index1 <= a; index1++) {
//       const e1 = a
//       if (e1 % index1 == 0) {
//         arr1.push(index1)
//       }
//     }
//     for (index2 = 2 ; index2 <= b; index2++) {
//       const e2 = b
//       if (e2 % index2 == 0) {
//         arr2.push(index2)
//       }
//     }
//     console.log(`Factors of ${a}`,arr1);
//     console.log(`Factors of ${b}`,arr2);
//     arr1.forEach((e)=>{
//       for (index3 = 0 ; index3 <= arr2.length; index3++) {
//         if (e == arr2[index3]) {
//           arr3.push(e)
//         }
//       }
//     })
//     console.log("LCM = " , arr3[0]);
//     return arr3[0]
//   }
//   findLCM(num1, num2)
// }

// 25. Write a ts program to find LCM of two numbers.
// {
//   let num1: string | null = prompt('Enter The Number')
//   let num2: string | null = prompt('Enter The Number')
//   let findHCF = (a: any, b: any) => {
//     let arr1:any[] = []
//     let arr2:any[] = []
//     let arr3:any[] = []
//     let index1:number;
//     let index2:number;
//     let index3:number;
//     for (index1 = 2 ; index1 <= a; index1++) {
//       const e1 = a
//       if (e1 % index1 == 0) {
//         arr1.push(index1)
//       }
//     }
//     for (index2 = 2 ; index2 <= b; index2++) {
//       const e2 = b
//       if (e2 % index2 == 0) {
//         arr2.push(index2)
//       }
//     }
//     console.log(`Factors of ${a}`,arr1);
//     console.log(`Factors of ${b}`,arr2);
//     arr1.forEach((e)=>{
//       for (index3 = 0 ; index3 <= arr2.length; index3++) {
//         if (e == arr2[index3]) {
//           arr3.push(e)
//         }
//       }
//     })
//     console.log("HCF = " ,arr3[arr3.length - 1]);
//     return arr3[arr3.length - 1]
//   }
//   findHCF(num1, num2)
// }

// 26. Write a ts program to check whether a number is Prime number or not.
// {
//     let num1: string | null = prompt('Enter The Number')
//     let index:any
//     let findPrimeNum = (x:any) => {
//       let arr1:any []= []
//       for ( index = 2; index < x; index++) {
//         if (x % index == 0) {
//           arr1.push(index)
//         }
//       }
//       if (arr1.length == 0) {
//         console.log("A Prime Number");
//       }else{
//         console.log("Not A Prime Number");
//       }
//       console.log(arr1);
//     }
//     findPrimeNum(num1)
// }

// 27. Write a ts program to print all Prime numbers between 1 to n.
// program to print prime numbers between the two numbers
// {
//   let input1: string | null = prompt('Starting From')
//   let input2: string | null = prompt('End Number')
//   function primeNumF(a: string | null, b: string | null) {
//     let x = Number(a)
//     let y = Number(b)
//     let condition = false
//     for (let index1 = x; index1 <= y; index1++) {
//       for (let index2 = 2; index2 < index1; index2++) {
//         if (index1 % index2 === 0) {
//           condition = false
//           break
//         } else {
//           condition = true
//         }
//       }
//       if (index1 === 2) {
//         condition = true
//       }
//       if (condition === true) {
//         console.log(index1)
//       }
//     }
//   }
//   primeNumF(input1, input2)
// }

// 28. Write a ts program to find sum of all prime numbers between 1 to n.
// {
//   let input1: string | null = prompt('Starting From')
//   let input2: string | null = prompt('End Number')
//   function primeNumS(a: string | null, b: string | null):number {
//     let x = Number(a)
//     let y = Number(b)
//     let arr1: number[] = []
//     let condition = false
//     for (let index1 = x; index1 <= y; index1++) {
//       for (let index2 = 2; index2 < index1; index2++){
//         if (index1 % index2 === 0) {
//           condition = false
//           break
//         } else {
//           condition = true
//         }
//     }
//     if (index1 === 2 || index1 === 1) {
//           condition = true
//       }
//       if (condition === true) {
//           arr1.push(index1)
//       }
//     }
//     let newArr = arr1.reduce((x,y)=>{
//         return x+y
//     })
//     console.log(newArr);
//     return newArr
//   }
//   primeNumS(input1, input2)
// }

// 29. Write a ts program to find all prime factors of a number.
// {
//   let num: string | null = prompt('Enter The Number')
//   let PrimeInFts = (a: string | null): number[] => {
//     let newArr: number[] = []
//     let arrForP: number[] = []
//     let x = Number(num)
//     let index: number = 1
//     let condition: boolean = false
//     while (index <= x) {
//       if (x % index == 0) {
//         newArr.push(index)
//       }
//       index++
//     }
//     for (let index1 = 0; index1 < newArr.length; index1++) {
//       let elem = newArr[index1]
//       for (let index2 = 2; index2 < elem; index2++) {
//         if (elem % index2 === 0) {
//           condition = false
//           break
//         } else {
//           condition = true
//         }
//       }
//       if (elem === 2 || elem === 1) {
//         condition = true
//       }
//       if (condition === true) {
//         arrForP.push(elem)
//       }
//     }
//     console.log('Factors =>', newArr)
//     console.log('Prime Numbers In Factors =>', arrForP)
//     return arrForP
//   }
//   PrimeInFts(num)
// }

// 30. Write a ts program to check whether a number is Armstrong number or not.
// {
//   let num: string | null = prompt('Enter The Number')
//   function findArm(a: string | null) {
//     let x = Number(a)
//     let sum: number = 0
//     if (a !== null) {
//       for (let index = 0; index < a.length; index++) {
//         let element: number = Number(a[index])
//         sum = sum + element * element * element
//       }
//       if (sum == x) {
//         console.log('Armstrong Number')
//       } else {
//         console.log('Not a Armstrong Number')
//       }
//     }
//   }
//   findArm(num)
// }

// 31. Write a ts program to print all Armstrong numbers between 1 to n.
{
  //   let num1: string | null = prompt('Enter The Number')
  //   let num2: string | null = prompt('Enter The Number')
  function findArm(a: string | null, b: string | null) {
    let x = Number(a)
    let y = Number(b)
    let arrArmS:number[] = []
    // console.log(y);
    let sum: number = 0
    let condition: boolean = false
    if (a !== null) {
      for (let index1 = x; index1 <= y; index1++) {
        console.log("index1 =>"+index1);
      }
      // console.log(arrArmS);
    }
  }
  findArm('1', '15')
}
// {
//   let num: string | null = prompt('Enter The Number')
//   let PrimeInFts = (a: string | null): number[] => {
//     let newArr: number[] = []
//     let arrForP: number[] = []
//     let x = Number(num)
//     let index: number = 1
//     let condition: boolean = false
//     while (index <= x) {
//       if (x % index == 0) {
//         newArr.push(index)
//       }
//       index++
//     }
//     for (let index1 = 0; index1 < newArr.length; index1++) {
//       let elem = newArr[index1]
//       for (let index2 = 2; index2 < elem; index2++) {
//         if (elem % index2 === 0) {
//           condition = false
//           break
//         } else {
//           condition = true
//         }
//       }
//       if (elem === 2 || elem === 1) {
//         condition = true
//       }
//       if (condition === true) {
//         arrForP.push(elem)
//       }
//     }
//     console.log('Factors =>', newArr)
//     console.log('Prime Numbers In Factors =>', arrForP)
//     return arrForP
//   }
//   PrimeInFts(num)
// }
