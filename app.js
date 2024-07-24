

const express = require('express');
const app = express();
const port = 3000;
const Book = require('./Book');
// const bodyParser = require('body-parser');

app.use(express.json());

//get all books
app.get('/books', (req, res) => {
    res.send(Book.findAll());
});


//get specific id
app.get('/books/:bookId', (req, res) => {
   const bookId = parseInt(req.params.bookId)
   const book = (Book.findOne(bookId));
    if(!book) {
        res.status(404).send({

            message: "Could not find the book."
        })
        return;
    }
   res.send(book);

})


//add a new book
app.post('/books/', (req, res) => {
    res.send(Book.create(req.body))
})

app.listen(port, () => {
    console.log('Express server is now listening on port ' + port);
});

