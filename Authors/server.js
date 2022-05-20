const express = require("express");
const cors = require("cors"); //import CORS- cross origin resource sharing
const app = express();//create my app variable which is an instance of express or in other words, I'm initializing express into a variable
const port = 8000; //this specifies what port my api will run in

//NEED THIS TO HANDLE POST REQUESTS. HAVE THESE TWO LINES BEFORE THE ROUTES!
app.use(express.json());//lets my app convert form info into json
app.use(express.urlencoded({extended: true})); //lets our app parse form information
app.use(cors()); //enable cors so that we can share resources back and forth between the backend and frontend

require("./server/config/mongoose.config"); //this is a modularized version of the mongoose connection code located in the mongoose.config.js. this require() literally points to its location.



//Routes here--Make sure routes import is below all the app.use commands above:
require("./server/routes/author.routes")(app); //have to pass in "app" keyword into routes file so that the routes file knows which "app is going to have our routes"


app.get("/api/hello",(req,res)=>{
    res.json({msq:"Hey World, here I am!!"})
})









//THIS LINE NEEDS TO BE AT THE BOTTOM OF THE FILE
app.listen(port, ()=>console.log(`Listening on port ${port}`));