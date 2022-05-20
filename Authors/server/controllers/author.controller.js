const Author = require("../models/Author.model"); //import the model so that the controller knows how to talk to the database to query the database


// module.exports.sayHello = (req, res)=>{
//     res.json({msg: "oh so you got jokes?"})
// } //this was just for testing purposes only

module.exports.findAllAuthors= (req, res)=>{
    Author.find() //this is a method not a function
    .then(allAuthors=>{
        res.json({results: allAuthors})
    })
    .catch(err=>{
        res.json({msg: "Something went wrong", error: err})
    })
    
}

module.exports.createAuthor = (req, res)=>{
    //req.body represents form information
    Author.create(req.body)
    .then(newlyCreatedAuthor=>{
        res.json({results: newlyCreatedAuthor})
    })
    .catch(err=>{
        res.json({msg:"Something went wrong", error: err})
    })
}

module.exports.findOneAuthor = (req, res)=>{
    Author.findOne({_id: req.params.id})
    .then(foundAuthor=>{
        res.json({results: foundAuthor})
    })
    .catch(err=>{
        res.json({msg: "Something went wrong", error: err})
    })
}

module.exports.updateAuthor = (req, res)=>{
    Author.findOneAndUpdate(
        {_id: req.params.id}, //specify which author to update
        req.body, //specify the form information to update the author with
        { new: true, runValidators: true }
        )
        .then(updatedAuthor=>{
            res.json({results: updatedAuthor})
        })
        .catch(err=>{
            res.json({msg: "Something went wrong", error: err})
        })
}

module.exports.deleteAuthor = (req, res)=>{
    Author.deleteOne({_id: req.params.id})
    .then(deletedAuthor=>{
        res.json({results: deletedAuthor})
    })
    .catch(err=>{
        res.json({msg: "Something went wrong", error: err})
    })
}