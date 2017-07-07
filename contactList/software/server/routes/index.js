const express = require('express');
const router = express.Router();
var contacts=require('./contacts/contacts')

/* GET home page. */
// ad contact
router.post('/addcontact',contacts.save)
router.delete('/contact/:id',contacts.delete)
router.get('/contacts',contacts.list)
module.exports = router;
