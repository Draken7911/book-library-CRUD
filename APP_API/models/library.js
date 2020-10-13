const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var authorSchema = new Schema({
    firstName: {type: String, required: true, minLength: 2},
    lastName: {type: String, required: true, minLength: 2},
    bestTitle: {type: String}
},
    {
        collection: 'Authors'
    });

var authorModel = mongoose.model('Author', authorSchema);

var publisherSchema = new Schema({
    name: {type: String, required: true, minLength: 3},
    city: {type: String}
},
    {
        collection: 'Publishers'
    });

var publisherModel = mongoose.model('Publisher', publisherSchema);

var bookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: Schema.ObjectId, ref: 'Author', required: true},
    publisher: {type: Schema.ObjectId, ref: 'Publisher', required: true},
    available: {type: Number, required: true, min: 0},
    pages: {type: Number},
    genre: {type: String},
    language: {type: String}
},
    {
        collection: 'Books'
    });

var bookModel = mongoose.model('Book', bookSchema);

var reviewSchema = new Schema({
    title: {type: Schema.ObjectId, ref: 'Book', required: true},
    ratings: {type: Number, min: 0, max: 5, required: true},
    comment: {type: String}
},
    {
        collection: 'Reviews'
    });

var reviewModel = mongoose.model('Review', reviewSchema);

module.exports = {
    authorModel,
    publisherModel,
    bookModel,
    reviewModel
};