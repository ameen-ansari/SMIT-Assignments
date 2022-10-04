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
{
    let arr1:number[] = [1,2,3,4,5,6,5000]
    let new1 = arr1.filter((e)=>{
        return e < 50
    })
    console.log(new1);
}
