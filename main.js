// // Create an integer array with 10 elements and the fill the data for this array.

// const arr = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// // Write a function to print all member of array to screen

// var arrLength = arr.length;

// for (let i = 0; i < arrLength; i++) { 
//     console.log(arr[i]);
// }

// //Write a function to permit user enter a value and find this is exits in array or not.

// //Write a function to find the maximum value in this array.

// var max = 0;

// for (let i = 0; i < arrLength; i++) { 
//     if (arr[i] > max) { 
//         max = arr[i];
//     }
// }

// console.log('Giá trị lớn nhất trong mảng là: ', max);

// //Write a function to calculate sum of all elements of array.

// var sum = 0;


// for (let i = 0; i < arrLength; i++) { 
//     sum += arr[i];
// }

// console.log('Tổng các phần tử trong mảng là: ', sum);

// //Write a function to sort all elements of array by descending
  
// var newArr = arr.sort((a, b) => a - b);
// console.log(newArr)

// //Setup a men to permit user enter a number to select to run a function. Example: 1 – Print Array, 2- Search a member, 3- Find maximum number, …


// //Ex2: Write a program to accept two integer numbers n and m then:

// // 1. Declaring a two dimension array with n rows and m column.

// function create2DArray(n, m) {
//     const arr = [];
//     for (let i = 0; i < n; i++) {
//       arr[i] = [];
//       for (let j = 0; j < m; j++) {
//         arr[i][j] = 0; // giá trị khởi tạo là 0
//       }
//     }
//     return arr;
//   }
  
//   const n = parseInt(prompt("Nhập số hàng: "));
//   const m = parseInt(prompt("Nhập số cột: "));
  
//   const my2DArray = create2DArray(n, m);
  
// console.log(my2DArray); // in ra mảng 2 chiều được khởi tạo
  
// // 2. Write a function to permit user enter the values for elements of array.
// // Viết hàm cho phép người dùng nhập giá trị cho các phần tử của mảng.

// function inputArrayValues() {
    
//     const arr = [];
  
//     for (let i = 1; i <= 3; i++) {
//       const value = parseInt(prompt(`Nhập giá trị cho phần tử thứ ${i}: `));
        
//         if (!isNaN(value)) {
//             arr.push(value);
//         } else {
//             break;
//         }
//     }
  
//     return arr;
//   }
  
//   const myArray = inputArrayValues();
  
// document.write('Đây là mảng sau khi được nhập giá trị:' + "[" + myArray + "]" + "<br>"); // in ra mảng được nhập giá trị

//   // Write another function to print all the elements of array to screen.
// // Viết một hàm khác để in tất cả các phần tử của mảng ra màn hình.
// if (myArray) {
//     var a = myArray.join(', ')
//     document.write('Các Phẩn Tử Của Mảng:' + a + '<br>')
// }
// //Write a function to calculate the total of elements of array.

// var sum1 = myArray.reduce((a, b) => a + b);
// document.write('Tổng các phần tử trong mảng: ' + sum1 + '<br>')

// //Write a function to enter a number and then check it is exist in array or not. 


// //Write a method to sort the elements of this array by ascending.

// var sapxep = myArray.sort((a, b) => a - b);

// document.write("Mảng sau khi sắp xếp là: [" + sapxep + "]" + '<br>');


// // Hàm tính tổng các phần tử của mảng

// document.write('Menu Kết Quả : <br>')
// // Thiết lập menu cho chương trình
// let choice = prompt("Vui lòng chọn tác vụ cần thực hiện:\n - In ra tổng các phần tử trong mảng: Ấn phím 1\n - In ra các phần tử trong mảng: Ấn phím 2\n - In ra mảng có thứ tự tăng dần: Ấn phím 3");

// switch (choice) {
//   case "1":
//     document.write("Tổng các phần tử của mảng là: " + sum1);
//     break;
//   case "2":
//         document.write("Các phần tử trong mảng là:" + a);
//     break;
//   case "3":
//     document.write("Mảng sau khi sắp xếp là: [" + sapxep + "]");
//     break;
//   default:
//     document.write("Lựa chọn không hợp lệ.");
// }



                                              // JAVA ASSIGNMENT -1


// 1. Create two integer variables (a and b) after that assign value for them. Then swap value of a and b and display to the screen.
// 

// const numA = parseInt(prompt('Nhập vào số a: '));
// const numB = parseInt(prompt('Nhập vào số b: '));
// var x = parseInt(numA);
// var y = parseInt(numB);
// var z = x;
// x = y;
// y = z;

// document.write('Đây là số A: ' + numA + '<br>');
// document.write('Đây là số B: ' + numB + '<br>');


// document.write('Đây là số A sau khi hoán đổi: '+ x + '<br>');
// document.write('Đây là số B sau khi hoán đổi: ' + y + '<br>');


// 2.Write a program to input three numbers as math, physics, and chemistry. Output average and rank according to the following

// const math = parseFloat(prompt(' - Nhập điểm môn Toán:'));
// const physics = parseFloat(prompt(' - Nhập điểm môn Lý:'));
// const chemistry = parseFloat(prompt(' - Nhập điểm môn Hoá:'));
// document.write(' - Điểm môn Toán là: ' + math + '<br>');
// document.write(' - Điểm môn Lý là: ' + physics + '<br>');
// document.write(' - Điểm môn Hoá là: ' + chemistry + '<br>');

// const average = ((math + physics + chemistry) / 3).toFixed(1);

// if (average >= 8) {
//   document.write(' - Điểm trung bình môn là :' + average + '<br>' + ' - Xếp Loại: A');
// } else if (average >= 6.5) {
//   document.write(' - Điểm trung bình môn là :' + average + '<br>' + ' - Xếp Loại: B');
// } else if (average >= 5) {
//   document.write(' - Điểm trung bình môn là :' + average + '<br>' + ' - Xếp Loại: C');
// } else { 
//   document.write(' - Điểm trung bình môn là :' + average + '<br>' + ' - Xếp Loại: D');
// }


// 3. Write a program to find x from ax + b =0 equation with a and b are input from keyboards.

// document.write(' - Tìm x trong phương trình ax + b = 0, với 2 số a, b được nhập từ bàn phím: <br>');


// const numA = parseFloat(prompt(' - Input Number A'));
// const numB = parseFloat(prompt(' - Input Number B'));
// const numX = -numB / numA;
// document.write(' - Giá trị a được nhập từ bàn phím: ' + numA + '<br>');
// document.write(' - Giá trị b được nhập từ bàn phím: ' + numB + '<br>');


// document.write(' - Giá trị của x trong phương trình ax + b = 0 là : ' + numX);

// 4. Write a program to find x from ax2 + bx + c =0 equation with a and b are input from keyboards.


// document.write(' - Nhập vào 3 số a, b, c từ bàn phím rồi in ra giá trị của x trong phương trình ax<sup>2</sup> + bx + c = 0 : <br>');
// const numA = parseFloat(prompt('a'));
// const numB = parseFloat(prompt('b'));
// const numC = parseFloat(prompt('c'));

// const delta = numB ** 2 - 4 * numA * numC;
// var numX1 = (-numB + Math.sqrt(delta)) / (2 * numA);
// var numX2 = (-numB - Math.sqrt(delta)) / (2 * numA);
// var numX3 = -numB / (2 * numA);

// if (delta > 0) {
//   document.write(' - Có 2 giá trị x trong phương trình ax<sup>2</sup> + bx + c = 0 là : <br> ' + ' - x<sub>1</sub> = ' + numX1 + '<br>' + ' - x<sub>2</sub> = ' + numX2);
// } else if (delta == 0) {
  
//   document.write(' - Có 1 giá trị của x trong phương trình ax<sup>2</sup> + bx + c = 0 là : ' + numX3);
  
// } else {
//   document.write(' - Không có giá trị của x trong phương trình ax<sup>2</sup> + bx + c = 0');
  
// };




// 5. Write a program to calculate sum of first 50 integer number.

// document.write(' - Tính tổng n số tự nhiên đầu tiên, n được nhập từ bàn phím: <br>');
// var n = parseFloat(prompt(' - Nhập số lượng số tự nhiên cần tính tổng :'));
// var sum = 0;
// for (i = 1; i <= n; i++) { 
//   sum += i;
// }
// document.write(' - Tổng của ' + n + ' số tự nhiên đầu tiên là: ' + sum);



// 6. Write a program to print to screen first 20 numbers of Fibonacci numbers.

// document.write(' - In ra N số đầu tiên của dãy sô Fibonacci với N được nhập từ bàn phím: <br>');
// let n = parseFloat(prompt('Nhập vào số lượng số đầu tiên trong dãy số Fibonacci: '));
// let numArray = [];

// numArray[0] = 0;
// numArray[1] = 1;

// for (let i = 2; i < n; i++) {
//   numArray[i] = numArray[i - 1] + numArray[i - 2];
// }
// const num = numArray.join(', ');

// document.write(' - ' + n + ' số đầu tiên của dãy số Fibonacci: ' + num);


// 7. Create an application to manage student’s information as below:
//  - Create variables to save a student’s information like: studentCode, studentName, studentAge, studentSex and set value for them.
//  - Print student’s information to screen.
//  - Edit program to permit user inputs data from keyboard.
//  - Edit program to permit user inputs a list of student from keyboard until “esc” key pressed.

// function addStudentsUntilEsc() {
//   var students = [];
//   while (true) {
//     // Get inputs from the user
//     let studentCode = prompt("Enter student code (or press 'esc' to finish):");
//     if (studentCode === null || studentCode.toLowerCase() === "esc") {
//       break;
//     }
//     let studentName = prompt("Enter student name:");
//     let studentAge = prompt("Enter student age:");
//     let studentSex = prompt("Enter student sex:");

//     // Create a new student object
//     let student = {
//       code: studentCode,
//       name: studentName,
//       age: studentAge,
//       sex: studentSex,
//     };
//     // Add the new student to the array
//     students.push(student);
//   }
//   console.log(students);
// }
// addStudentsUntilEsc();  


// 8. Write a program to accepts a number n from 1 to 12 and then print number of days in month n of the current year. If user enter a number out of range an error message will display.


// var n = parseFloat(prompt(' - Vui lòng nhập tháng mà bạn cần kiểm tra số ngày của tháng đó: '));

// switch (n) {
//   case 1:
//     document.write('Tháng ' + n + ' có 31 ngày!');
//     break;
//   case 2:
//     document.write('Tháng ' + n + ' có 28 ngày!');
//     break;
//   case 3:
//     document.write('Tháng ' + n + ' có 31 ngày!');
//     break;
//   case 4:
//     document.write('Tháng ' + n + ' có 30 ngày!');
//     break;
//   case 5:
//     document.write('Tháng ' + n + ' có 31 ngày!');
//     break;
//   case 6:
//     document.write('Tháng ' + n + ' có 30 ngày!');
//     break;
//   case 7:
//     document.write('Tháng ' + n + ' có 31 ngày!');
//     break;
//   case 8:
//     document.write('Tháng ' + n + ' có 31 ngày!');
//     break;
//   case 9:
//     document.write('Tháng ' + n + ' có 30 ngày!');
//     break;
//   case 10:
//     document.write('Tháng ' + n + ' có 31 ngày!');
//     break;
//   case 11:
//     document.write('Tháng ' + n + ' có 30 ngày!');
//     break;
//   case 12:
//     document.write('Tháng ' + n + ' có 31 ngày!');
//     break;
//   default:
//     document.write('Tháng ' + n + ' làm gì có cha!');
//     break;
// }

// const arr = [1, 2, 3, [3, 2, 1], 1, 3, 5, [1, 2, 3], 1, 2, 3];
// var arrNew = arr.flat();

// console.log(arrNew)

















