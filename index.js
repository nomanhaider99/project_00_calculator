#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let querries = await inquirer.prompt([
    { type: "number", name: "num1", message: "Enter your first number: " },
    { type: "number", name: "num2", message: "Enter your second number: " },
    { type: "list", name: "operator", message: "Enter your operator: ", choices: ["+", "-", "*", "/"] },
]);
switch (querries.operator) {
    case "+":
        console.log(`Answer:  ${chalk.cyan(querries.num1 + querries.num2)}`);
        break;
    case "-":
        console.log(`Answer:  ${chalk.cyan(querries.num1 - querries.num2)}`);
        break;
    case "*":
        console.log(`Answer:  ${chalk.cyan(querries.num1 * querries.num2)}`);
        break;
    case "/":
        console.log(`Answer:  ${chalk.cyan(querries.num1 / querries.num2)}`);
        break;
    default:
        console.log("Invalid Input value!!");
}
