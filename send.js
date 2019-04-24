


const accountSid = 'ACe804c300980ff57e67d8ce2213eca68d';
const authToken = '2cde65b862ffb6aefbd505db28af8908';
const client = require('twilio')(accountSid, authToken);

client.messages
.create({
   body:'Yo Yo Yo',
    from:'+16477978929',
    to:'+15148037407'
})
.then(message => console.log(message.sid));