#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance = 10000 // Dollar
const myPin = 12345;

const pinanswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "please enter your pin",
    }
]);
if (pinanswer.pin === myPin){
    console.log("correct your pin");

const operationanswer = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "please select a option",
        choices: ["withdraw" , "check balance"],
    }
]);

if (operationanswer.operation === "withdraw"){
    console.log(operationanswer);
} else if (operationanswer.operation === "check balance"){
    console.log("your balance is:" + " "+ myBalance);
}

const amountanswer = await inquirer.prompt([
    {
        name: "amount",
        type: "number",
        message: "enter your amount",
    }
]);

myBalance-=amountanswer.amount
console.log("your remaining balance is:" + " "+ myBalance);


}else{
    console.log("Incorrect your number");
}


console.log("The End");