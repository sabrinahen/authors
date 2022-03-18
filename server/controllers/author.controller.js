const Author = require("../models/author.model");

module.exports = {

    findAllAuthors: (req, res)=>{
        Author.find().sort({name: 1})
            .then((allAuthors)=>{
                console.log(allAuthors);
                res.json(allAuthors)
            })
            .catch((err)=>{
                console.log("findAllAuthors has failed");
                res.json({message: "Something went wrong with findAll", error: err})
            })
    },

    creatNewAuthor: (req, res)=>{
        Author.create(req.body)
        .then((newAuthor)=>{
            console.log(newAuthor);
            res.json(newAuthor)
        })
        .catch((err)=>{
            console.log("Something went wrong in createNewAuthor!");
            res.status(400).json(err)
        })
    },

    findOneAuthor: (req, res)=>{
        Author.findOne({_id: req.params.id})
            .then((oneAuthor)=>{
                console.log(oneAuthor);
                res.json(oneAuthor);
            })
            .catch((err)=>{
                console.log("findOneAuthor has failed!");
                res.json({message: "Something went wrong with findOneAuthor", error: err})
            })
    },

    deleteOneAuthor: (req, res)=>{
        Author.deleteOne({_id: req.params.id})
            .then((deletedAuthor)=>{
                console.log(deletedAuthor);
                res.json(deletedAuthor);
            })
            .catch((err)=>{
                console.log("deleteOneAuthor has failed!");
                res.json({message: "Something went wrong with deleteOneAuthor", error: err})
            })
    },

    updateAuthor: (req, res)=> {
        Author.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            )
            .then((updatedAuthor)=>{
                console.log(updatedAuthor);
                res.json(updatedAuthor);
            })
            .catch((err)=>{
                console.log("Something went wrong in updateAuthor!");
                res.status(400).json(err)
            }
            )
    }


}