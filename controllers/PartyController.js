/**
 * The PartyController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/PartyService');
const createparty = async (request, response) => {
  await Controller.handleRequest(request, response, service.createparty);
};

const deleteparty = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteparty);
};

const getAllparty = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllparty);
};

const getparty = async (request, response) => {
  await Controller.handleRequest(request, response, service.getparty);
};

const updateparty = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateparty);
};


module.exports = {
  createparty,
  deleteparty,
  getAllparty,
  getparty,
  updateparty,
};
