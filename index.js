/**
 *  Jerson De Real Caibog
 *  2025-01-21
 */

import fs from "fs";
import readline from "readline";

// readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});    

// get data from JSON file
fs.readFile('data.json', 'utf-8', (err, data) => {
    const result = JSON.parse(data);
    processData(result)
})

// get user input
const getUserInput = (question) => {
    
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });    
    });        
};        

// process data
async function processData(data) {
    
    let startYear = parseInt(data[0].category)
    let endYear = parseInt(data[data.length - 1].category)
    let y, x, m, b

    console.log(`\nHello, World! This is my Prediction Model for the Philippines' Average Temperature.
Utilizing a simple linear regression, this model forecasts future temperatures
based on historical data trends that show a steady increase. \n`)
    
    const input = await getUserInput('Enter year (2024 or later): ') 
    x = parseInt(input) - startYear // independent variable
    
    if (!x || isNaN(x) || x < (2024 - startYear)) {
        console.log("\nInvalid year input. Process terminated. \n ")
        rl.close();
        return
    }    
    
    rl.close();
    
    let y1 = parseFloat(data[data.length - 1]['5yrSmooth'])
    let y2 = parseFloat(data[0]['5yrSmooth'])
    let x1 = endYear - startYear
    let x2 = startYear - startYear
    
    m = (y1 - y2) / (x1 - x2) // slope of the line
    b = y2 - (m * x2) // y-intercept
    y = (m * x) + b // output of the linear regression equation
    
    const increaseRate = (((y - y2) / y2) * 100).toFixed(2)
    const result = `\nThe predicted average temperature in the Philippines for the year ${input} is ${y.toFixed(2)}°C,
reflecting a ${increaseRate}% increase since ${startYear}.\n`;
    
    console.log(result)

}    