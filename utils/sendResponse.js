function sendResponseMessage(res, status, message) {
    res.status(status);
    res.send(message);
}

function sendResponseData(res, status, data) {
    res.status(status);
    res.send(data);
}

module.exports = {
    sendResponseMessage,
    sendResponseData,
}