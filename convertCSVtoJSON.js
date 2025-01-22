// Convert CSV to JSON format
import csvParser from "csv-parser";
import fs from "fs";

const csvFilePath = "observed-annual-average.csv"; // your CSV file
const jsonFilePath = "data.json" // yout JSON file where the data will be stored

const stream = fs.createReadStream(csvFilePath);
const data = []

stream
    .pipe(csvParser())
    .on("data", (row) => {
        data.push(row)
    })
    .on("end", () => {
        
        fs.writeFile(jsonFilePath, JSON.stringify(data), (err, data) => {
            if (err) {
                console.error("Error writing file:", err);
            } else {
                console.log("File has been written successfully");
            }
        });

    })