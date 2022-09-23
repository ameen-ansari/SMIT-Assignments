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
{
  let str: string | null  = '123'
//   let str: string | null = prompt('Enter The Value')
  function strToR(a: any) {
    let strvalue:string | undefined;
    let ind = a.length 
    // console.log(a[ind]);
    while (ind >= 1) {
        ind = ind-1
        strvalue += a[ind]
    }
    console.log(strvalue);

  }
  strToR(str)
}