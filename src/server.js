const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send("Hola como estan");
});

app.listen(8080,function(){
    console.log("app is listening on port 300");
});
