#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter the first number",
        type: "number",
        name: "num1",
    },
    {
        message: "Enter the second number",
        type: "number",
        name: "num2",
    },
    {
        message: "Select an operator to perform on the numbers.",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    let result = answer.num1 + answer.num2;
    console.log(`The result is ${result}`);
}
else if (answer.operator === "Subtraction") {
    let result = answer.num1 - answer.num2;
    console.log(`The result is ${result}`);
}
else if (answer.operator === "Multiplication") {
    let result = answer.num1 * answer.num2;
    console.log(`The result is ${result}`);
}
else if (answer.operator === "Division") {
    let result = answer.num1 / answer.num2;
    console.log(`The result is ${result}`);
}
else {
    console.log("Please select a valid operator");
}
