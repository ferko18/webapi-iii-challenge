const express = require('express');
const server = express();

server.use(logger)

const postRouter = require('./posts/postRouter');
const userRouter = require('./users/userRouter');

server.use('/api/posts', postRouter);
server.use('/api/users', userRouter);
server.use(express.json());


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middlewares

function logger(req, res, next) {
 console.log(`A ${req.method} request was made to ${req.url} at ${Date.now()}`)
 next()
};

module.exports = server;
