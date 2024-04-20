#! usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: 1, //baseamount
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 277
};
let answer = await inquirer.prompt([
    {
        name: 'from',
        message: 'Select your currency from',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: 'Select your currency to',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: 'Enter your amount',
        type: 'number'
    },
]);
let fromamount = currency[answer.from];
let toamount = currency[answer.to];
let amount = answer.amount;
let baseamount = amount / fromamount; //USD base currency
let convertedamount = baseamount * toamount;
console.log(convertedamount);
// let studentdata = {
//     name: "ayesha",
//     age: "18",
//     rollno: "abc1234",
//     address: "karachi"
// }
// console.log (studentdata.address)
