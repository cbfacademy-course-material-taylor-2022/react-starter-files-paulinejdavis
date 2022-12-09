import React, {useState } from 'react';
import Search from './components/Search';
//import Book from './components/Book';
import data from './models/books.json';
import BookList from './components/BookList';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About'


function App() {
    const [books, setBooks] = useState(data);
    const [bookcase, setBookcase] = useState([]);
    const [search, setSearch] = useState('')

    async function findBooks(value){
        const url = `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`;
    
        const results = await fetch(url).then(res => res.json());
    if (!results.error) {
        setBooks(results.items);
    }
    
    }

    function addBook(id) {
        setBookcase(bookcase.concat(books.filter(book => book.id === id)))

        books.map(book => {
            if (book.id === id) {
            console.log(`You selected '${book.volumeInfo.title}'was selected `);
        }
        return book;
        });
       
    }
    
    // return ;
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={
                <>
                <Header />
                <h2> Welcome to the Bookcase App</h2>
                <Search  findBooks={findBooks} search={search} setSearch={setSearch}/>
                <BookList books={books} addBook={addBook} />
            </>
            } />
            </Routes>
            <Routes>
            <Route exact path="/bookcase" element={
            <>
                <Header/>
                <h2> Welcome to the Bookcase App</h2>
                <BookList books={books} addBook={addBook} />
                </>
                } />

            <Route exact path="/about" element={ <About />} />
            </Routes>
        </Router>
        );

}
export default App;
