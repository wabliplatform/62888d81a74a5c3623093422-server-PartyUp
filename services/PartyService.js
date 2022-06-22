/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Party } = require('../models/Party');

/**
* Creates the data
*
* party Party data to be created
* returns party
* */
const createparty = ({ party }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Party(party).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* partyId String the Id parameter
* no response value expected for this operation
* */
const deleteparty = ({ partyId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Party.findOneAndDelete({ _id:partyId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllparty = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Party.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* partyId String the Id parameter
* returns party
* */
const getparty = ({ partyId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Party.findById(partyId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* partyId String the Id parameter
* party Party data to be updated (optional)
* returns party
* */
const updateparty = ({ partyId, party }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Party.findOneAndUpdate({ _id:partyId },party).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createparty,
  deleteparty,
  getAllparty,
  getparty,
  updateparty,
};
