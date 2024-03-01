const { readFile } = require("./handleJsonFile");

function isIdValid(id) {
    return id && Number(id);
}

function verifyIfIdExists(fileName, id) {
    const list = readFile(fileName);

    return list.find(item => item.id === id);
}

module.exports = {
    verifyIfIdExists,
    isIdValid,
}