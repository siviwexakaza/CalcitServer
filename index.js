const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const user = require('./routes/api/user');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://siviwe:246810@expose-t6srn.mongodb.net/cityboarddb?retryWrites=true&w=majority',{useNewUrlParser :true})
.then(()=>{console.log('DB Connected')}).catch(err=>console.log(err));

app.get('/',(req,res)=>{
    res.send('Server started');
});

app.use('/api/user',user);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});

