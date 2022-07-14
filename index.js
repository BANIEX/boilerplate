const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", function(request, response){
    response.send("Na me dey here bro , stop playing. Yo fam")
})

app.listen(PORT, function(){
    console.log(`Damn, this nigga be listening on port ${PORT}`)
})