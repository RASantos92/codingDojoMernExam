const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/pet",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("You are now in the mainframe!!"))
.catch(() => console.log("MELT DOWN MELT DOWN"))
