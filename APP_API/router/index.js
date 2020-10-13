var express = require('express');
var router = express.Router();
const ctrlAuthor = require('../controllers/Authors');
const ctrlPublisher = require('../controllers/Publishers');
const ctrlBook = require('../controllers/Books');
const ctrlReview = require('../controllers/Reviews')

router.get('/authors', ctrlAuthor.getAuthors);
router.post('/authors', ctrlAuthor.createAuthor);
router.get('/authors/:authorid', ctrlAuthor.getSingleAuthor);
router.put('/authors/:authorid', ctrlAuthor.updateAuthor);
router.delete('/authors/:authorid', ctrlAuthor.deleteAuthor);

router.get('/publishers', ctrlPublisher.getPublishers);
router.post('/publishers', ctrlPublisher.createPublisher);
router.get('/publishers/:publisherid', ctrlPublisher.getSinglePublisher);
router.put('/publishers/:publisherid', ctrlPublisher.updatePublisher);
router.delete('/publishers/:publisherid', ctrlPublisher.deletePublisher);

router.get('/books', ctrlBook.getBooks);
router.post('/books', ctrlBook.createBook);
router.get('/books/:bookid', ctrlBook.getSingleBook);
router.put('/books/:bookid', ctrlBook.updateBook);
router.delete('/books/:bookid', ctrlBook.deleteBook);

router.get('/ratings/:bookid', ctrlReview.getRatings);
router.post('/reviews', ctrlReview.createReview);

module.exports = router;