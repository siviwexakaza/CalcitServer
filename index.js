const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const app = express();

app.get('/',(req,res)=>{
    res.send('Server started');
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});

