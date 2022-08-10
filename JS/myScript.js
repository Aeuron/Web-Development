// var variable = 300 + -50;
// var variable = "300 + -50";
// var variable = true;
// alert(typeof(variable));

// var name = prompt("What is your name?");
// var user_name = "Garry";
// alert(user_name);

// var begin = "Start ";
// var end = "here.";

// var message = prompt("Say something.");
// var messageCount = message.slice(0,140);

// if(message.length > 140)
// {
//     alert("Too many characters.")
// }
// else if(message.length <= 140)
// {
//     alert("You have said " + message.length + " characters and have " + (140 - message.length) + " characters remaining.");
// }

// messageCount;
// messageCount.length;

// var first_name = "Garry";
// var last_name = "mcgee";
// first_name.toUpperCase();
// last_name.toLowerCase();

// Name input
// var name = prompt("Name?");
// var firstChar = name.slice(0,1);
// var upperCaseFirstChar = firstChar.toUpperCase();

// var restOfName = name.slice(1, name.length);
// var lowerCaseRestOfName = restOfName.toLowerCase();

// alert("Hello, " + upperCaseFirstChar + lowerCaseRestOfName);

// Dog Age Converter
// var dogAge = 18;
//
// var humanAge = ((dogAge - 2) * 4) + 21
//
// humanAge;

// Time remaining calculator
// function lifeInWeeks(age) {
//     //Write your code here.
//     var yearsLeft = 90 - age;
//
//     var monthsLeft = yearsLeft * 12;
//     var weeksLeft = yearsLeft * 52;
//     var daysLeft = yearsLeft * 365;
//
//     console.log("You have " + daysLeft +  " days," + weeksLeft + "weeks," + monthsLeft + "months left.");
// }

// function getMilk(money)
// {
//   return money % 1.5;
// }
// var change = getMilk(4);
// console.log("change");
//
// function bmiCalculator(weight, height){
//     return weight / (height * height);
// }

// function bmiCalculator (weight, height) {
//
//     var bmi = weight / (height * height);
//     var interpretation = "";
//
//     if(bmi < 18.5)
//     {
//         interpretation = "Your BMI is " + bmi + ", so you are underweight.";
//         console.log(interpretation);
//     }
//     else if(bmi > 18.5 && bmi < 24.9)
//     {
//         interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
//         console.log(interpretation);
//     }
//     else if(bmi > 24.9)
//     {
//         interpretation = "Your BMI is " + bmi + ", so you are overweight.";
//         console.log(interpretation);
//     }
//
//     return interpretation;
// }

// function isLeap(year) {
//
// /**************Don't change the code above****************/
//
//     //Write your code here.
//     var y = year % 4;
//     if(y > 0)
//     {
//         console.log("Not leap year.");
//     }
//     else{
//         console.log("Leap year.");
//     }
//
//
//
// /**************Don't change the code below****************/
//
// }
// }
//
// function alertMe(message){
//    for(var i = 0; i < 5; i++)
//     {
//       console.log(message);
//     }
// }
//
// var a = Math.random();
// // console.log(a);
//
// function LoveCalculation(max){
//
//     user_1 = prompt("What is your name?");
//     user_2 = prompt("What is the name of the person you're interested in?");
//
//     var num = Math.floor(Math.random() * (max + 1)); // Need to add 1 to equal max num.
//
//     if(num < 50)
//     {
//         alert(user_1 + " and " + user_2 + " are " + num + "% compatible. You guys could try making it work.");
//     }
//     else if (num >= 50 && num <= 75)
//     {
//         alert(user_1 + " and " + user_2 + " are " + num + "% compatible.");
//     }
//     else if(num > 75 && num < 90)
//     {
//         alert(user_1 + " and " + user_2 + " are " + num + "% compatible. You guys got something going on here!");
//     }
//     else if(num >= 90)
//     {
//         alert(user_1 + " and " + user_2 + " are " + num + "% compatible. You guys love each other like Kanye loves Kanye!");
//     }
//
// }

// var guestList = ["Garry","Zia","Tamiko","Kevin","Goran","David"];
// var approvedGuests = ["Garry", "Zia","Tamiko"];
//
// var name = prompt("What is your name?");
//
// for(var i = 0; i < guestList.length; i++)
//     {
//         if(guestList.includes(name))
//         {
//             console.log("Approved");
//         }
//         else
//         {
//             console.log("Not Approved");
//         }
//         // console.log(guestList[i]);
//     }

// namesList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
// function whosPaying(names) {
//
//     /******Don't change the code above*******/
//
//     //Write your code here.
//     var numberOfPeople = names.length;
//     var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
//     var randomPerson = names[randomPersonPosition];
//
//     console.log(randomPerson + " is going to buy lunch today!");
//     return randomPerson + " is going to buy lunch today!";
//
//
//
//     /******Don't change the code below*******/
// }
//
// whosPaying(namesList);

// function beer(num) {
//
//     /******Don't change the code above*******/
//
//     //Write your code here.
//     var i = num + 1;
//     while (i > 0) {
//         i--;
//         if (i != 0) {
//             console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.");
//         }
//         else if (i === 0) {
//             console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
//         }
//
//     }
//
//
//
//     /******Don't change the code below*******/
// }
//
// beer(99);
