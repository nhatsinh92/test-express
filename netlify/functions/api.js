const serverless = require("serverless-http");
const express = require('express');
const router = express.Router();
const users = require('../../json/users.json');

const api = express();

/* GET users listing. */
router.get('/api/users', function(req, res, next) {
  res.json(users)
});

api.use("/api/", router);

export const handler = serverless(api);
