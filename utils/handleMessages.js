const postMessage = (entity) => `${entity} inserido com sucesso!`;
const patchMessage = (entity) => `${entity} alterado com sucesso!`;
const deleteMessage = (entity) => `${entity} deletado com sucesso!`;
const invalidIdOrNotExists = () => "Id inválido ou não existe!";
const invalidIdOrItExists = () => "Esse Id já existe ou é inválido!";
const requiredField = (field) => `O campo ${field} é obrigatório!`;
const requiredFields = (fields) => `Os campos ${fields} são obrigatórios!`;

module.exports = {
    postMessage,
    patchMessage,
    deleteMessage,
    invalidIdOrNotExists,
    invalidIdOrItExists,
    requiredField,
    requiredFields,
}