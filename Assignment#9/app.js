// 1. Write a TypeScript program to list the properties of a TypeScript object
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno
// Ans...
// class student {
//     userName:string
//     userClass:number
//     userRollNo:number
//     constructor(a:string , b:number , c:number){
//         this.userName = a
//         this.userClass = b
//         this.userRollNo = c
//     }
// }
// var S1 = new student('Ameen' , 12 , 141)
// console.log(S1);
// 2. Write a TypeScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Ans...
// class student {
//     userName:string
//     userClass:number
//     userRollNo?:number
//     constructor(a:string , b:number , c:number){
//         this.userName = a
//         this.userClass = b
//         this.userRollNo = c
//     }
// }
// var S1 = new student('Ameen' , 12 , 141);
// console.log(S1);
// delete S1.userRollNo
// console.log(S1);
//     3. Write a TypeScript program to get the length of a TypeScript object.
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// class student {
//   userName: string
//   userClass: number
//   userRollNo?: number
//   constructor(a: string, b: number, c: number) {
//     this.userName = a
//     this.userClass = b
//     this.userRollNo = c
//   }
// }
// var S1 = new student('Ameen', 12, 141)
// console.log(S1)
// var size = Object.keys(S1).length
// console.log(size)
// 4. Write a TypeScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
// var library = [
//   {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//     readingStatus: true,
//   },
//   {
//     author: 'Steve Jobs',
//     title: 'Walter Isaacson',
//     readingStatus: true,
//   },
//   {
//     author: 'Suzanne Collins',
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     readingStatus: false,
//   },
// ]
// library.forEach(element => {
//     console.log(`Book Auther Name Is ${element.author}. Book Title is ${element.title}.ReadingStatus ${element.readingStatus} `);
// });
// 5. Write a TypeScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.
// 6. Write a Bubble Sort algorithm in TypeScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]
var a = [6, 4, 0, 3, -2, 1];
a.sort(function (a, b) { return a - b; });
console.log(a);
