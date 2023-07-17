const express = require('express');

const serverless = require('serverless-http');

const app = express();

const router = express.Router();

router.get('/', (req,res) => {
   res.json({
      'hello': 'hi!'
   })
});

router.get('/members', (req, res) => {
   Member.find()
     .then(members => {
       res.json(members);
     })
     .catch(error => {
       console.log('Failed to fetch members', error);
       res.status(500).json({ error: 'Failed to fetch members' });
     });
 });

module.exports.handler = serverless(app);