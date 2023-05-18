const mongoose = require("mongoose");

const DB   = "mongodb+srv://sumonta121:fmC31RHZYGSQ6Fee@cluster0.vlur8rj.mongodb.net/mernstack?retryWrites=true&w=majority"; 

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));