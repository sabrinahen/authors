const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "This is the only item on the form... Of course you need it!"],
        minLength: [3, "The author's name must be at least 3 characters!"]
    }

}, {timestamps: true})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;