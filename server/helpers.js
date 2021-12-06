const fs = require("fs");

function getObjectByKey(list, requestKeyValue, key){
    return list.find((object) => object[key] === requestKeyValue);
}

function handleResponse(res, req, found, handlerCallback = function () {}) {
    if (found) {
      handlerCallback();
      res.json(found);
    } else {
      res.status(404).send(`item with ID ${req.params.id} not found`);
    }
  }


  module.exports = {
    getObjectByKey,
    handleResponse,
  };