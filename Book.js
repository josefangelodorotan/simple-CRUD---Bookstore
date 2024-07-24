
let books = [
    {
        "id": 1, 
        "tilte": "The picture of Dorian Gray"
    },

    {
        "id": 2, 
        "tilte": "The walking dead"
    },

    {
        "id": 3, 
        "tilte": "The secret"
    },
];

let lastId = 3;

module.exports = {
    findAll() {
        return books;
    },

    findOne(id) {
        return books.find(book => book.id === id)
    },
    
    create(book) {
        const id = ++lastId;

        const newBook = {
            id,
            title: book.title
        };
        books.push(newBook);

       return newBook
    }
};