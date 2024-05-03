const express = require('express');
//! npm install express-http-proxy
const proxy = require('express-http-proxy');
//! npm install cors
const cors = require('cors');

const app = express();
app.use(cors()) //se koristi za site ruti
// const corsOptions = {
//   origin: '*',
// };

// app.use(cors(corsOptions)); se koristi cors za specificni ruti

const authProxy = proxy('http://localhost:6000', {
  proxyReqPathResolver: (req) => {
    return `/api/v1/auth${req.url}`;
  },
});

const postProxy = proxy('http://localhost:6001', {
  proxyReqPathResolver: (req) => {
    return `/api/v1/posts${req.url}`;
  },
});

// ovde kje gi upotrebime middelverite shto gi pravemvme pogore
// app.use('/api/v1/auth/', cors(), authProxy);
// app.use('/api/v1/posts/', cors(), postProxy); // posebno za sekoja ruta

app.use('/api/v1/auth/', authProxy);
app.use('/api/v1/posts/', postProxy); // cors vazi za site ruti

app.listen(6002, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Proxy service started on Port 6002');
});

//* npm install concurrently --save-dev
