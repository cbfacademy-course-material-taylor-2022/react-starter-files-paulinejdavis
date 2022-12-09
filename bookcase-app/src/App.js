import React, {useState } from 'react';
// import Search from './components/search';
// import Book from './components/Book';
import data from './models/books.json';
import BookList from './components/BookList';


function App() {
    const [books] = useState(data);

    function addBook(book) {
        console.log(`You selected '{book}' to add to your bookcase`);
    }
    
    return <BookList books={books} addBook={addBook} />;

}
export default App;
