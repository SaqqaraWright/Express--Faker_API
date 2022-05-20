const mongoose = require('mongoose');

//The purpose of this file is to describe how my authors table (collection) should look

//instructions for what the authors table should look like below:

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [3, "Name must be at least 3 characters long!"]
    },
},
{ timestamps: true }
);

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;