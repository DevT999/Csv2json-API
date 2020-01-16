const csvjson = require('./lib/csvjson');
const readFile = require('fs').readFile;
const writeFile = require('fs').writeFile;
const source_json = 'data/users.json';
var json_veri = '';

readFile(source_json, 'utf-8', (err, fileContent) => {
    if (err) {
        console.log(err);
        throw new Error(err);
    }  

    json_veri = fileContent;
    const csvData = csvjson.toCSV(fileContent, {
        headers: 'relative'
    });
    writeFile('converted_csv/users.csv', csvData, (err) => {
        if(err) {
            console.log(err);
            throw new Error(err);
        }
        console.log('Convert Success!');
    });
});

module.exports = {
    isExiting : function() {
        return source_json;
    },
    isJson : function(){
        return json_veri;
    }
}