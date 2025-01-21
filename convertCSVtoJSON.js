// Convert CSV to JSON format
import csvParser from "csv-parser";
import fs from "fs";

const stream = fs.createReadStream("observed-annual-average.csv");
const data = []

stream
    .pipe(csvParser())
    .on("data", (row) => {
        data.push(row)
    })
    .on("end", () => {
        
        fs.writeFile("data.json", JSON.stringify(data), (err, data) => {
            if (err) {
                console.error("Error writing file:", err);
            } else {
                console.log("File has been written successfully");
            }
        });

    })