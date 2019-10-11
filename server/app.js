const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const config = require('./config.js');
const PORT = config.PORT;
const maintenanceModule = require('./routes/maintenanceModel.js');
const dbConnector = require('./dbConnector.js');

app.use(cors());
app.use(helmet());

app.use(express.static('../client/'));

app.use('/api/maintenance', maintenanceModule);
// app.use('/parking', parking);
// app.use('/rent', rent);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`App listenign on ${PORT}`)
});