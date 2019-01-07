/* Script: csv-to-json.js 
   Features: This script converts the incoming companies file(csv) to a JSON string as given below
   Output: ./src/data/updatedDECAFOrders.json
*/

const csvFile='../data/updatedDECAForders.csv';
const toJSON = require('csvtojson');
const fs = require('fs');

toJSON()
.fromFile(csvFile)
.then((companiesArray) => {
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
.catch((err) => console.log('Error occured while converting CSV to JSON'));




 