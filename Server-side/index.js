require('dotenv').config();
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hd52t.mongodb.net/${process.env.DB_DOCTOR}?retryWrites=true&w=majority`;
const client = new MongoClient(uri,{ useUnifiedTopology: true }, { useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/' , (req,res)=>{
    res.send('hello world')
})



client.connect(err => {
  const doctorPatient = client.db("doctorPortal").collection("patientId");
   console.log('the database conected sucessfully');
});



app.listen(5000, ()=>{
    console.log('the server will be start on port 5000');
})