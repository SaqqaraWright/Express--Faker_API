const Joke = require("../models/joke.model"); //import the model so that the controller knows how to talk to the database to query the database


// module.exports.sayHello = (req, res)=>{
//     res.json({msg: "oh so you got jokes?"})
// } this was just for testing purposes only

module.exports.findAllJokes= (req, res)=>{
    Joke.find() //this is a method not a function
    .then(allJokes=>{
        res.json({results: allJokes})
    })
    .catch(err=>{
        res.json({msg: "Something went wrong", error: err})
    })
    
}

module.exports.createJoke = (req, res)=>{
    //req.body represents form information
    Joke.create(req.body)
    .then(newlyCreatedJoke=>{
        res.json({results: newlyCreatedJoke})
    })
    .catch(err=>{
        res.json({msg:"Something went wrong", error: err})
    })
}

module.exports.findOneJoke = (req, res)=>{
    Joke.findOne({_id: req.params.id})
    .then(foundJoke=>{
        res.json({results: foundJoke})
    })
    .catch(err=>{
        res.json({msg: "Something went wrong", error: err})
    })
}

module.exports.updateJoke = (req, res)=>{
    Joke.findOneAndUpdate(
        {_id: req.params.id}, //specify which quote to update
        req.body, //specify the form information to update the quote with
        { new: true, runValidators: true }
        )
        .then(updatedJoke=>{
            res.json({results: updatedJoke})
        })
        .catch(err=>{
            res.json({msg: "Something went wrong", error: err})
        })
}

module.exports.deleteJoke = (req, res)=>{
    Joke.deleteOne({_id: req.params.id})
    .then(deletedJoke=>{
        res.json({results: deletedJoke})
    })
    .catch(err=>{
        res.json({msg: "Something went wrong", error: err})
    })
}