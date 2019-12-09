const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const user = require('./routes/api/user');
const bank = require('./routes/api/bank');
const business = require('./routes/api/business');
const contact = require('./routes/api/contact');
const product = require('./routes/api/product');
const invoice = require('./routes/api/invoice');
const bill = require('./routes/api/bill');
const expense = require('./routes/api/expense');


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));

mongoose.connect('mongodb+srv://siviwe:246810@expose-t6srn.mongodb.net/cityboarddb?retryWrites=true&w=majority',{useNewUrlParser :true})
.then(()=>{console.log('DB Connected')}).catch(err=>console.log(err));

app.get('/',(req,res)=>{
    res.send('Server started');
});

app.use('/api/user',user);
app.use('/api/bank',bank);
app.use('/api/business',business);
app.use('/api/contact',contact);
app.use('/api/product',product);
app.use('/api/invoice',invoice);
app.use('/api/bill',bill);
app.use('/api/expense',expense);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});

