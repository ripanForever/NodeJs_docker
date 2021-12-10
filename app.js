const express = require("express");
const app = express();

app.set('view engine', 'ejs');

const port = 3000;

app.get("/",(req,res)=>{
    res.render('index');
})

app.listen(port,()=>{
    console.log(`listenting to port ${port}`);
});