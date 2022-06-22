
const { PartyPartyImageSchema } =require('./PartyPartyImage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partySchema = new Schema({
Underscoreid:String , 


partyDate:String , 


partyDetails:String , 


partyTheme:String , 


partyHost:String , 


partyImage:  
PartyPartyImageSchema
 , 


partyTime:String , 


partyTitle:String , 


partyAdress:String , 



partyParticipants:[String]




})

module.exports = {
  Party : mongoose.model('party', partySchema),
}

