# Philippines' Average Temperature Prediction Model

This project converts a CSV file containing historical temperature data into JSON format and uses a simple linear regression model to predict future temperatures based on the historical data.

## Project Structure

- `convertCSVtoJSON.js`: Script to convert the CSV file to JSON format.
- `data.json`: JSON file generated from the CSV file.
- `index.js`: Main script to read the JSON data and predict future temperatures using linear regression.
- `observed-annual-average.csv`: CSV file containing historical temperature data.
- `package.json`: Project configuration and dependencies.

## Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage
1. Convert the CSV file to JSON:
    ```sh
    node convertCSVtoJSON.js
    ```
2. Run the prediction model:
    ```sh
    node index.js
    ```

## Example
When prompted, enter a year (2024 or later) to get the predicted average temperature for that year.

## Dependencies
- `csv-parser`: A streaming CSV parser for Node.js.

## Author
Jerson De Real Caibog
