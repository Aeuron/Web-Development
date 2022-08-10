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

function getMilk(money)
{
  return money % 1.5;
}
var change = getMilk(4);
console.log("change");
