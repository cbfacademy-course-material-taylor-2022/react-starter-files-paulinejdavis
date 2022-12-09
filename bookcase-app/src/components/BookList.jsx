import React from 'react';
import Book from './Book';
import './styles.css'


function BookList(props) {
    // const {books} = props;
    // return (    
    //     <div>
    //         {books.map(book => <Book key={book.id} book={book}/>)}  
    //     </div>  
    // )
    return props.books.map(book => <Book key={book.id} book={book} addBook={props.addBook}/>);
}   

export default BookList;