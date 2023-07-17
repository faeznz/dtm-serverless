const express = require('express');

const serverless = require('serverless-http');

const app = express();

const router = express.Router();

app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
   next();
 });

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

app.use('/.netlify/functions/api', router);

 module.exports.handler = serverless(app);