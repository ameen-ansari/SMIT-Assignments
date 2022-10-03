// 1. Write a ts program to find length of a string.
// {
//     let str:string | null = prompt('Enter The Value')
//     function strLFinder(a:string):number {
//         let x = a.length
//         console.log(x);
//         return x
//     }
//     strLFinder(str)
// }
// 2. Write a ts program to copy one string to another string.
// {
//     let str:string | null = prompt('Enter The Value')
//     function mdCloneStr(a:string):string {
//         let x = a.slice(0)
//         console.log("New String = ",x);
//         return x
//     }
//     mdCloneStr(str)
// }
// 3. Write a ts program to concatenate two strings.
// {
//     let str1:string | null = prompt('Write String 1 Here')
//     let str2:string | null = prompt('Write String 2 Here')
//     function mdCloneStr(a:string , b:string):string {
//         let x = a.concat(b)
//         console.log("New String = ",x);
//         return x
//     }
//     mdCloneStr(str1 , str2)
// }
// 4. Write a ts program to compare two strings.
// {
//     let str1:string | null = prompt('Write String 1 Here')
//     let str2:string | null = prompt('Write String 2 Here')
//     function mdCloneStr(a:string , b:string):number {
//         let x = a.localeCompare(b)
//         if (x === 0 ) {
//             console.log('matched');
//         }else{
//             console.log("Unmatched");
//         }
//         return x
//     }
//     mdCloneStr(str1 , str2)
// }
// 5. Write a ts program to convert lowercase string to uppercase.
// {
//     let str:string | null = prompt('Write String 2 Here')
//     function mdCloneStr(a:string):string {
//         let x = a.toUpperCase()
//             console.log(x);
//         return x
//     }
//     mdCloneStr(str)
// }
// 6. Write a ts program to convert uppercase string to lowercase.
// {
//     let str:string | null = prompt('Write String 2 Here')
//     function mdCloneStr(a:string):string {
//         let x = a.toLowerCase()
//             console.log(x);
//         return x
//     }
//     mdCloneStr(str)
// }
// 7. Write a ts program to toggle case of each character of a string.
// {
//     let str:string | null = prompt('Write String 2 Here')
//     function mdCloneStr(a:string):string {
//         let x:string;
//         if (a == a.toUpperCase()) {
//             x = a.toLowerCase()
//         }else{
//             x = a.toUpperCase()
//         }
//             console.log(x);
//         return x
//     }
//     mdCloneStr(str)
// }
// 8. Write a ts program to find total number of alphabets, digits or special character in a string.
// {
//     let str:string | null = prompt('Enter The Value')
//     function strLFinder(a:string):number {
//         let x = a.length
//         console.log(x);
//         return x
//     }
//     strLFinder(str)
// }
// 9. Write a ts program to count total number of vowels and consonants in a string.
// {
//   let str: string | null = prompt('Enter The Value')
//   function strVCFinder(a: string) {
//     let numForV: number = 0
//     let numForC: number = 0
//     for (let index = 0; index < a.length; index++) {
//       const e = a[index]
//       if (e.match(/[aeiou]/i)) {
//         numForV++
//       } else {
//         numForC++
//       }
//     }
//     console.log('Consonants in String', numForC)
//     console.log('Vowels in String', numForV)
//   }
//   strVCFinder(str)
// }
// 10. Write a ts program to count total number of words in a string.
// {
//   let str: string | null = prompt('Enter The Value')
//   function strWFinder(a: string) {
//     let numForC: number = 0
//     for (let index = 0; index < a.length; index++) {
//       const e = a[index]
//       if (e.match(/[a-zA-Z]/i)) {
//         numForC++
//       }
//     }
//     console.log('Total Words', numForC)
//   }
//   strWFinder(str)
// }
// 11. Write a ts program to find reverse of a string.
// 13. Write a ts program to reverse order of words in a given string
// {
//   let num1: string | null = prompt('Enter The String')
//   const strR = (a: string | null): string=> {
//     let newStr = ''
//     if (a !== null) {
//     let lengthF = a.length - 1
//       for (let index = lengthF; index >= 0; index--) {
//         const element = a[index]
//         newStr += element
//       }
//       console.log(newStr)
//     }
//     return newStr
//   }
//   strR(num1)
// }
// 12. Write a ts program to check whether a string is palindrome or not.
// {
//   let num1: string | null = prompt('Enter The String')
//   const findPDNum = (a: string | null): string=> {
//     let newStr = ''
//     if (a !== null) {
//     let lengthF = a.length - 1
//       for (let index = lengthF; index >= 0; index--) {
//         const element = a[index]
//         newStr += element
//       }
//     }
//     if (newStr == a) {
//       console.log('A Palindrome Number');
//     }else{
//       console.log('Not A Palindrome Number');
//     }
//     return newStr
//   }
//   findPDNum(num1)
// }
// 14. Write a ts program to find first occurrence of a character in a given string.
// {
//   let num1: string | null = prompt('Enter The String')
//   function occurenceF(a: string | null): string {
//     let firstOccurence: string = ""
//     if (a !== null) {
//       for (let index = 0; index < a.length; index++) {
//         firstOccurence = a[0]
//       }
//     }
//     console.log(firstOccurence);
//     return firstOccurence
//   }
//   occurenceF(num1)
// }
// 15. Write a ts program to find last occurrence of a character in a given string.
// {
//   let num1: string | null = prompt('Enter The String')
//   function occurenceF(a: string | null): string {
//     let firstOccurence: string = ""
//     if (a !== null) {
//       for (let index = 0; index < a.length; index++) {
//         firstOccurence = a[a.length -1]
//       }
//     }
//     console.log(firstOccurence);
//     return firstOccurence
//   }
//   occurenceF(num1)
// }
// 16. Write a ts program to search all occurrences of a character in given string.
// {
//   let num1: string | null = prompt('Enter The String')
//   let num2: string | null = prompt('occurence of number')
//   function SOcurence(a: string | null, b: string | null) {
//     if (a !== null && b !== null) {
//       for (let index = 0; index < a.length; index++) {
//         const element = a[index]
//         if (element == b) {
//           console.log('index-' + index + '=>', b)
//         }
//       }
//     }
//   }
//   SOcurence(num1, num2)
// }
// 17. Write a ts program to count occurrences of a character in given string.
// {
//   let num1: string | null = prompt('Enter The String')
//   let num2: string | null = prompt('occurence of number')
//   function SOcurence(a: string | null, b: string | null) {
//     let counter:number = 0
//     if (a !== null && b !== null) {
//       for (let index = 0; index < a.length; index++) {
//         const element = a[index]
//         if (element == b) {
//             counter++
//         }
//       }
//     }
//     console.log(counter+" Times Occur In Given String");
//     return counter
//   }
//   SOcurence(num1, num2)
// }
// 18. Write a ts program to find highest frequency character in a string.
// working
// 19. Write a ts program to find lowest frequency character in a string.
// working
// 20. Write a ts program to count frequency of each character in a string.
// {
//   let num1: string | null = prompt('Enter The String')
//   let num2: string | null = prompt('Find Occurence')
//   function occurenceF(a: string | null, b: string | null) {
//     if (a !== null && b !== null) {
//       let occerF: number = 0
//       for (let index = 0; index < a.length; index++) {
//         if (a[index] == b) {
//           occerF++
//         }
//       }
//       console.log(occerF)
//     }
//   }
//   occurenceF(num1, num2)
// }
//Solve kar raha hu(Under Construction Area)
// ==> conditional operators programming exercises
// 1. Write a ts program to find maximum between two numbers using conditional operator.
// var num1:number = 2
// var num2:number = 4
// if(num1 > num2){
//     console.log('num1 is greater than num2');
// }else{
//     console.log('num2 is greater than num1');
// }
// 2. Write a ts program to find maximum between three numbers using conditional operator.
// var num1: number = 2
// var num2: number = 4
// var num3: number = 6
// if (num1 > num2 && num1 > num3) {
//   console.log('num1 is greater than num2 & num3')
// } else if (num2 > num1 && num2 > num3) {
//   console.log('num2 is greater than num1 & num3')
// }else{
//     console.log('num3 is greater than num1 & num2')
// }
// 3. Write a ts program to check whether a number is even or odd using conditional operator.
// var num1: number = 67
// if (num1 % 2 === 0) {
//   console.log('Number is Even')
// } else {
//   console.log('Number is Odd')
// }
// 4. Write a ts program to check whether year is leap year or not using conditional operator.
// var dt:any = new Date()
// var year:number = dt.getFullYear()
// if (year % 4 === 0) {
//     console.log('Present Year Is a Leap Year');
// }
// else{
//     console.log('Present Year Is Not a Leap Year');
// }
// 5. Write a ts program to check whether character is an alphabet or not using conditional operator.
// var vowel: string = 'aeiou'
// var check: string = 'u'
// if (vowel.includes(check)) {
//   console.log('number is Vowel')
// } else {
//   console.log('number is Not a Vowel')
// }
// ==> List of switch case programming exercises
// 1. Write a ts program to print day of week name using switch case.
// 2. Write a ts program print total number of days in a month using switch case.
// 3. Write a ts program to check whether an alphabet is vowel or consonant using switch case.
// 4. Write a ts program to find maximum between two numbers using switch case.
// 5. Write a ts program to check whether a number is even or odd using switch case.
// 6. Write a ts program to check whether a number is positive, negative or zero using switch case.
// 7. Write a ts program to find roots of a quadratic equation using switch case.
// 8. Write a ts program to create Simple Calculator using switch case.
//Inshallah Next Time
