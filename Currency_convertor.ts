#! /usr /bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgBlue("***currency convertor***));




const currency: any = {
    USD:1,     // base currency 
    PKR:277.54,
    INR:83.30,
    EUR:0.92,
    NZD:1.66,
    NPR:133.08,
    MAD:10.06,
    EGP:47.33,
    IRR:42075.00,
    AFN:71.23,
    IQD:1008.17,
};
let userSelection = await inquirer.prompt(
    [
        {
           name:"From",
           message:"SELECT YOUR CURRENCY WHICH YOU WANT TO CONVERT ",
           type:"list",
           Choices:"['USD', 'PKR', 'INR', 'EUR', 'NZD', 'NPR', 'MAD', 'EGP', 'IRR', 'AFN', 'IQD']",
        },
        {
            name:"TO",
            message:"SELECT YOUR CURRENCY IN WHICH YOU WANT TO CONVERT",
            type:"list",
            Choices:"['USD', 'PKR', 'INR', 'EUR', 'NZD', 'NPR', 'MAD', 'EGP', 'IRR', 'AFN', 'IQD']",
        },
        {
            name: "Amount",
            message:"HOW MUCH YOU WANE TO CONVERT",
            type:"number",
        },
    ]
);
let fromlist = currency[userSelection.From];
let tolist = currency[userSelection.To];
let amount = userSelection.Amount;
let BaseAmount = amount /fromlist;
let covertedAmount = BaseAmount * tolist;
let result = Math.round(covertedAmount) 

console.log(chalk.bgMagenta(result));
