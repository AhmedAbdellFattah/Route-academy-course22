// Q1:
// var num = Number(window.prompt('Enter a number:'));
// window.alert('This is your number: ' + num);
// console.log(num);


//Q2:
// var num = Number(window.prompt("Enter a number: "));
// if(num % 3 == 0 && num % 4 == 0 ){
//     window.prompt("Yes")
//     console.log("Yes");
// }
// else{
//     window.prompt("No")
//     console.log("No");
// }


//Q3:
// var num1 = Number(window.prompt("Enter first number: "));
// var num2 = Number(window.prompt("Enter second number: "));
// if(num1 > num2){
//     window.prompt("First number: "+num1+ " is larger than"+" second number: "+num2); 
//       console.log("First number: "+num1+ " is larger than"+" second number: "+num2);
// }
// else if(num1 == num2){
//     window.prompt("The two numbers are equal.");
//       console.log("The two numbers are equal.");
// }
// else{
//     window.prompt("Second number: "+num2+ " is larger than"+" first number: "+num1); 
//       console.log("Second number: "+num2+ " is larger than"+" first number: "+num1);
// };


//Q4:
// var num = Number(window.prompt("Enter a number: "));
// if(num < 0){
//     window.prompt("This is a negative number.");
//       console.log("This is a negative number.");
// }
// else if(num > 0){
//     window.prompt("This is a positive number.");
//       console.log("This is a positive number.");
// }
// else{
//     window.prompt("This is number is neither positive nor negative (equal Zero)")
//       console.log("This is number is neither positive nor negative (equal Zero)");
// };


//Q5:
// var num1 =  Number(window.prompt("Enter first number: "));
// var num2 =  Number(window.prompt("Enter second number: "));
// var num3 =  Number(window.prompt("Enter third number: "));

// //finding Maximum number:

// if(num1>num2 && num1>num3){
//     window.alert("Max number is: "+num1);
//     console.log("Max number is: "+num1);
// }
// else if(num2>num1 && num2>num3){
//     window.alert("Max number is: "+num2);
//     console.log("Max number is: "+num2);
// }
// else if(num3>num1 && num3>num2){
//     window.alert("Max number is: "+num3);
//     console.log("Max number is: "+num3);
// }

// //finding Minimum number:

// if(num1<num2 && num1<num3){
//     window.alert("Min number is: "+num1);
//     console.log("Min number is: "+num1);
// }
// else if(num2<num1 && num2<num3){
//     window.alert("Min number is: "+num2);
//     console.log("Min number is: "+num2);
// }
// else if(num3<num1 && num3<num2){
//     window.alert("Min number is: "+num3);
//     console.log("Min number is: "+num3);
// }


//Q6:
// var num = Number(window.prompt("Enter an integer number: "));

// if(num % 2 == 0){
//     window.alert("This number is even");
//     console.log("This number is even");
// }
// else{
//     window.alert("This number is odd");
//     console.log("This number is odd");
// }


//Q7:
// var Character = window.prompt("Enter only one character: ");

// if( Character == 'a' ||  Character == 'e' ||  Character == 'i' ||  Character == 'o' ||  Character == 'u'  ){
//     window.alert("Vowel");
//     console.log("Vowel");
// }
// else if(Character != 'a' ||  Character != 'e' ||  Character != 'i' ||  Character != 'o' ||  Character != 'u' ){
//     window.alert("Consonant");
//     console.log("Consonant");
// }


//Q8:
// var num = Number(window.prompt("Enter an integer number: "));
// for (let i = 1; i <= num; i++) {
//     console.log(i);
// }


//Q9:
// var num = Number(window.prompt("Enter an integer number: "));
// for (let i = 1; i <= 12 ;i++){
//     console.log(i*num);
// }


//Q10:
// var num = Number(window.prompt("Enter an integer number: "));
// for (let i = 1; i <= num; i++) {
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }


//Q11:
// var num1 = Number(window.prompt("Enter first number: "));
// var num2 = Number(window.prompt("Enter second number: "));
// console.log(num1**num2);


//Q12:
// var firstSubject = Number(window.prompt("Enter marks of first subject: "));
// var secondSubject = Number(window.prompt("Enter marks of second subject: "));
// var thirdSubject = Number(window.prompt("Enter marks of third subject: "));
// var fourthSubject = Number(window.prompt("Enter marks of fourth subject: "));
// var fifthSubject = Number(window.prompt("Enter marks of fifth subject: "));

// var totalSub = firstSubject + secondSubject + thirdSubject + fourthSubject + fifthSubject;
// var avgSub = totalSub / 5;
// var percentSub = totalSub / 500 * 100;

// console.log("Total Marks= "+totalSub);
// console.log("Average Mark= "+avgSub);
// console.log("Percentage= "+percentSub+'%');


//Q13:
// var monthNum = Number(window.prompt("Enter a month number: "));

// // January, March, May, July, August, October, December
// if(monthNum == 1 || monthNum == 3 || monthNum == 5 || monthNum == 7 || monthNum == 8 || monthNum == 10 || monthNum == 12){
//     console.log("Days in this month are = 31 days.");
// }
// // February
// else if(monthNum == 2){
//     console.log("Days in this month are = 28 or 29 days.");
// }
// // April, June, September, November
// else if(monthNum == 4 || monthNum == 6 || monthNum == 9 || monthNum == 11){
//     console.log("Days in this month are = 30 days.");
// }
// // if invalid or incorrect number
// else{
//     console.log("Incorrect number.");
// }


//Q14:
// var physicsMark = Number(window.prompt("Enter Physics mark: "));
// var chemisrtyMark = Number(window.prompt("Enter Chemistry mark: "));
// var biologyMark = Number(window.prompt("Enter Biology mark: "));
// var mathematicsMark = Number(window.prompt("Enter Mathematics mark: "));
// var computerMark = Number(window.prompt("Enter Computer mark: "));

// var totalGrade = physicsMark + chemisrtyMark + biologyMark + mathematicsMark + computerMark;
// var percentange = totalGrade / 500 * 100;

// if(percentange >= 90){
//     console.log("Your percentage grade = "+percentange+"%"+" and your grade is A");
// }
// else if(percentange >= 80){
//     console.log("Your percentage grade = "+percentange+"%"+" and your grade is B");
// }
// else if(percentange >= 70){
//     console.log("Your percentage grade = "+percentange+"%"+" and your grade is C");
// }
// else if(percentange >= 60){
//     console.log("Your percentage grade = "+percentange+"%"+" and your grade is D");
// }
// else if(percentange >= 40){
//     console.log("Your percentage grade = "+percentange+"%"+" and your grade is E");
// }
// else if(percentange < 40){
//     console.log("Your percentage grade = "+percentange+"%"+" and your grade is F");
// }


//Q15:
// var monthNum = Number(window.prompt("Enter month number: "));

// switch (monthNum) {
//     case 1:
//         console.log("Days in this month are = 31 days.");
//     break;
//     case 2:
//         console.log("Days in this month are = 28 or 29 days.");
//     break;
//     case 3:
//         console.log("Days in this month are = 31 days.");
//     break;
//      case 4:
//         console.log("Days in this month are = 30 days.");
//     break;
//      case 5:
//         console.log("Days in this month are = 31 days.");
//     break; 
//     case 6:
//         console.log("Days in this month are = 30 days.");
//     break;
//     case 7:
//         console.log("Days in this month are = 31 days.");
//     break;
//     case 8:
//         console.log("Days in this month are = 31 days.");
//     break;
//     case 9:
//         console.log("Days in this month are = 30 days.");
//     break;
//     case 10:
//         console.log("Days in this month are = 31 days.");
//     break;
//     case 11:
//         console.log("Days in this month are = 30 days.");
//     break;
//     case 12:
//         console.log("Days in this month are = 31 days.");
//     break;
// }


//Q16:
// var character = window.prompt("Enter only one character: ");
// switch (character) {
//     case 'a':
//         console.log("Vowel");
//     break;

//     case 'e':
//         console.log("Vowel");
//     break;

//     case 'i':
//         console.log("Vowel");
//     break;

//     case 'o':
//         console.log("Vowel");
//     break;

//     case 'u':
//         console.log("Vowel");
//     break;    

//     default:
//         console.log("consonant");
//     break;
// }


//Q17:
// var num1 = Number(window.prompt("Enter first number: ")); 
// var num2 = Number(window.prompt("Enter second number: "));

// switch (num1>num2) {
//     case true:
//         console.log("First number is the maximum");
//     break;

//     default:
//         console.log("Second number is the maximum");
//     break;
// }


//Q18:
// var num = Number(window.prompt("Enter a number: "));

// switch (num % 2 == 0) {
//     case true:
//         console.log("The number is even");
//     break;

//     default:
//         console.log("The number is odd");
//     break;
// }


//Q19:
// var num = Number(window.prompt("Enter a number: "));
// switch (num>0) {
//     case true:
//         console.log("The number is Positive");
//     break;
// }
// switch (num<0) {
//     case true:
//         console.log("The number is Negative");
//     break;
// }
// switch (num==0) {
//     case true:
//         console.log("The number is neither positive nor negative (ZERO)");
//     break;
// }


//Q20:
// var num1 = Number(window.prompt("Enter first number: "));
// var num2 = Number(window.prompt("Enter second number: "));
// var operator = window.prompt("Enter only one operator (as +,-,/,*): ");
// switch (operator) {
//     case '+':
//         console.log("The addition of two numbers is: "+Number(num1+num2));
//     break;

//     case '-':
//         console.log("The subtraction of two numbers is: "+Number(num1-num2));
//     break;

//     case '/':
//         console.log("The division of two numbers is: "+Number(num1/num2));
//     break;

//     case '*':
//         console.log("The multiplication of two numbers is: "+Number(num1*num2));
//     break;
// }