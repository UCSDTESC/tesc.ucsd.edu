/* Script: csv-to-json.js 
   Features: This script converts the incoming companies file(csv) to a JSON string as given below
   Output: ./src/data/updatedDECAFOrders.json

   Note: Run this script from the overall folder using scripts/decaf-csv-to-json.js or else
   the path for the csvFile will be wrong
*/

const csvFile = './src/data/updatedDECAForders.csv';
const toJSON = require('csvtojson');
const fs = require('fs');

toJSON()
  .fromFile(csvFile)
  .then((companiesArray) => {

    //removing all duplicate entries lol sorry
    companiesArray = [...new Set(companiesArray.map(JSON.stringify))].map(JSON.parse)

    let jsonObj = {
      companies: companiesArray
    };

    let jsonFile = JSON.stringify(jsonObj);
    
    fs.writeFile(`${csvFile.slice(0, -4)}.json`, jsonFile, 'utf8', (err) => {
      if (err) {
        throw err;
      }

      console.log(`The CSV file was converted to JSON and stored as ${csvFile.slice(0, -4)}.json`); // Log the success
    });
  })
  .catch((err) => console.log('Error occured while converting CSV to JSON: ' + err));




 