const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const config = require('./config.js');
const PORT = config.PORT;

app.use(cors());
app.use(helmet());

app.use('/static', express.static('../client/'));

app.listen(PORT, () => {
    console.log(`App listenign on ${PORT}`)
})