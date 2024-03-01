const fs = require('fs');

function readFile(fileName) {
    return JSON.parse(fs.readFileSync(`${fileName}.json`));
}

function writeFile(fileName, content) {
    fs.writeFileSync(`${fileName}.json`, JSON.stringify(content));
}

module.exports = {
    readFile,
    writeFile,
}