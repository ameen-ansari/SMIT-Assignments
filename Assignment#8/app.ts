// 1. Write a ts program to read and print elements of array.
// {
//   let arr: string[] = ['ameen', 'mohsin', 'ali', 'ahmad']
//   arr.forEach((e) => {
//     console.log(e)
//   })
// }

// 2. Write a ts program to print all negative elements in an array.
// {
//   let numArr: number[] = [-3, -2, -1, 0, 1, 2, 3]
//   numArr.filter((e) => {
//     if (e < 0) {
//       console.log(e)
//     }
//   })
// }
// 3. Write a ts program to find sum of all array elements.
// {
//   let numArr: number[] = [1, 2, 3]
//   let sum: number = 0
//   numArr.reduce((e: number, u: number): number => {
//     return (sum = e + u)
//   })
//   console.log(sum)
// }

// 4. Write a ts program to find maximum and minimum element in an array.
// function minMaxFinder(a: number[]) {
//   let minNum: number | undefined
//   let maxNum: number | undefined
//   for (let num of a) {
//     if (minNum === undefined) {
//       minNum = num
//     } else {
//       if (num < minNum) {
//         minNum = num
//       }
//     }
//     if (maxNum === undefined) {
//       maxNum = num
//     } else {
//       if (num > maxNum) {
//         maxNum = num
//       }
//     }
//   }
//   console.log(minNum)
//   console.log(maxNum)
// }
// let x = minMaxFinder([2, 99, 3, 4, 56, 0])

// 5. Write a ts program to find second largest element in an array.
// {
//   let newArr: number[] = [99, 1, 2, 3, 45, 6]
//   newArr.sort((a, b) => {
//     return a - b
//   })
//   let sNum = 0
//   for (let num of newArr) {
//     if (num !== newArr[newArr.length - 1] && num > sNum) {
//       sNum = num
//     }
//   }
//   console.log(sNum)
// }

// 6. Write a ts program to count total number of even and odd elements in an array.
// {
//     let counterEO = (a:number []) => {
//         let evenNumber:number = 0
//         let oddNumber:number = 0
//         a.forEach((e)=>{
//             if (e % 2 === 0) {
//                 evenNumber++
//             }else{
//                 oddNumber++
//             }
//         })
//         console.log(evenNumber,'EvenNumbers Found');
//         console.log(oddNumber,'OddNumbers Found');
//     }
//     counterEO([1,2,3,4])
// }

// 7. Write a ts program to count total number of negative elements in an array.
// {
//     let counterNeg = (a:number []) => {
//         let negNumber:number = 0
//         a.forEach((e)=>{
//             if (e < 0) {
//                 negNumber++
//             }
//         })
//         console.log(negNumber,'Negative Numbers Found');
//     }
//     counterNeg([-2753,1,2,3,4])
// }

// 8. Write a ts program to copy all elements from an array to another array.
// {
//     let copyArray = (a:any []):any => {
//         let newarr:any = a.slice(0)
//         console.log(newarr);
//         return newarr
//     }
//     copyArray([-2753,1,2,3,4])
// }

// 9. Write a ts program to insert an element in an array.
// {
//     let arr1:any []= [1,2]
//     let arr2:any []= ['ameen','akbar']
//     let newarr:any [] = arr1.concat(arr2)
//     console.log(newarr);
// }

// 10. Write a ts program to delete an element from an array at specified position.
// {
//     let arr1:number[] = [1,2,3,4,5,6,5000]
//     let new1 = arr1.filter((e)=>{
//         return e < 50
//     })
//     console.log(new1);
// }

// 11. Write a ts program to count frequency of each element in an array.
// {
//   let arr: string[] = ['1', '2', '3', '1', '23', '23']
//   let fOcearence = (a: string[], b: string) => {
//       let c: number = 0
//     arr.forEach((e) => {
//         if (e === b) {
//             c++
//         }
//     })
//     console.log(c)
//     return c
// }
// fOcearence(arr, '23')
// }

// 12. Write a ts program to print all unique elements in the array.
// {
//   let arr: string[] = ['1', '2', '3', '1', '23', '23', '7625']
//   let uNum = (a:string[]) => {
//       let num: number = 0
//       let newone = arr.filter((e) => {
//         let num = Number(e)
//         return num < 50
//       })
//       console.log(newone)
//   }
//   uNum(arr)
// }

// 13. Write a ts program to count total number of duplicate elements in an array.
// {
//   let arr: number[] = [5, 1, 1, 2, 34, 5, 5, 6, 5]

//   let dcont = (a: number[]) => {
//     let sorted = arr.sort((a: number, b: number): number => {
//       return a - b
//     })
//     let counter: number = 0
//     sorted.forEach((e: number, i: number) => {
//       if (e == arr[i + 1]) {
//         counter++
//       }
//     })
//     console.log(counter)
//   }

//   dcont(arr)
// }

// 14. Write a ts program to delete all duplicate elements from an array.
// {
//   let arr: number[] = [5, 1, 1, 2, 34, 5, 5, 6, 5]

//   let dcont = (a: number[]): number[] => {
//     let newone: number[] = []
//     let sorted = arr.sort((a: number, b: number): number => {
//       return a - b
//     })
//     let counter: number = 0
//     sorted.forEach((e: number, i: number) => {
//       if (e == arr[i + 1]) {
//         counter++
//       } else {
//         newone.push(e)
//       }
//     })
//     console.log(newone)
//     return newone
//   }

//   dcont(arr)
// }

// 15. Write a ts program to merge two array to third array.
// {
//   let a: string[] = ['ameen']
//   let b: string[] = ['akbar']
//   let c: string[] = ['rasheed']
//   a = [...a, ...b, ...c]
//   console.log(a)
// }

// 16. Write a ts program to find reverse of an array.
// {
//     let arr:number []= [1,2,3,4]
//     arr.reverse()
//     console.log(arr);
// }

// 17. Write a ts program to put even and odd elements of array in two separate array.
// let a: number[] = [1, 2, 3, 4]
// let even: number[] = []
// let odd: number[] = []
// a.forEach((e) => {
//   if (e % 2 == 0) {
//     even.push(e)
//   } else {
//     odd.push(e)
//   }
// })
// console.log('Even Numbers =>', even)
// console.log('Odd Numbers =>', odd)

// 18. Write a ts program to search an element in an array.
// {
//   let arr: number[] = [1, 2, 3, 4, 5]
//   let userSearch: number = 31
//   for (let index = 0; index < arr.length; index++) {
//     let element = arr[index]
//     // element.toString()
//     if (element == userSearch) {
//       console.log(element)
//       break
//     } else {
//       console.log('Nothing Found')
//     }
//   }
// }

// 19. Write a ts program to sort array elements in ascending or descending order.
// {
//   let arr: number[] = [11, 1, 3, 4, 51]
//   let ascending: number[] = arr.sort((a, b) => {
//     return a - b
//   })
//   console.log("Ascending Order",ascending)
//   let descending: number[] = arr.sort((a, b) => {
//     return b - a
//   })
//   console.log("Descending Order",descending)
// }

// 20. Write a ts program to sort even and odd elements of array separately.
// {
//   let even: number[] = []
//   let odd: number[] = []
//   let arr: number[] = [11, 1, 3, 4, 51]
//   let sortedArr: number[] = arr.sort((a, b) => {
//     return a - b
//   })
//   sortedArr.forEach((e) => {
//     if (e % 2 == 0) {
//       even.push(e)
//     } else {
//       odd.push(e)
//     }
//   })
//   console.log('Even Numbers', even)
//   console.log('Odd Numbers', odd)
// }

// 21. Write a ts program to left rotate an array.
{
    let arr1:number [] = [1,2,3,4,5,6]
    let index1:number =  Math.ceil(arr1.length / 2)
    let newone:number[] = []
    let newtwo:number[] = []
    let final:number[] = []

    for (let index = 0; index < arr1.length; index++) {
        const element = arr1[index];
        if (index >= index1) {
            newone.push(element)
        }else{
            newtwo.push(element)
        }
    }
    final = [...newone , ...newtwo]
    console.log(final);
}

// 22. Write a ts program to right rotate an array.
{
    let arr1:number [] = [1,2,3,4,5,6]
    let index1:number =  Math.ceil(arr1.length / 2)
    let newone:number[] = []
    let newtwo:number[] = []
    let final:number[] = []

    for (let index = 0; index < arr1.length; index++) {
        const element = arr1[index];
        if (index < index1) {
            newone.push(element)
        }else{
            newtwo.push(element)
        }
    }
    final = [...newtwo,...newone ]
    console.log(final);
}
