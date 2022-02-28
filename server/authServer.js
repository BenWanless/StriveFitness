const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 7020;
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');


app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use('/register', registerRoute);
app.use('/login', loginRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); 
