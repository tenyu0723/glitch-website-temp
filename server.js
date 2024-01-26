const express = require('express');

app.use('/public',express.static(__dirname +"/public"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
