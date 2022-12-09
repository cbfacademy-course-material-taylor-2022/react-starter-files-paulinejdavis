import React from "react";
import Header from '../components/Header';
import './About.css'

function About(){
    return(
        <>
        <Header/>
       <div className="header">
       <p>
        The following application was created by Pauline. 
        This bookcase app displays a list of books that a user 
        can save to a local bookcase.
        </p>
        <p>
        Click on the "Add + " button to add a book to your bookcase app. 
        Use the search bar to find the latest books by name, author or
        description
        </p>
       </div>
    </>
    )
}

export default About;