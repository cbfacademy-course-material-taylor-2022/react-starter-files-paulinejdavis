import {Link} from 'react-router-dom';
import React from 'react';



function Header(){

    return(
       <>
         <h1>My Bookcase</h1>
         <Link to="/"> Home </Link>
         <Link to="/bookcase" className="bookLink">Bookcase</Link> 
         <Link to="/about" className="bookLink">About</Link>            
       </>
    );
}

export default Header;