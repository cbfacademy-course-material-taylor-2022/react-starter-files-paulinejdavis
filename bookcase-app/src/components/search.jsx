import React from 'react';

const Search = (props) => {
  const handleSubmit = (event) =>{
      event.preventDefault();
      props.findBooks(props.keyword);
  };

  return <form onSubmit={handleSubmit}>
        <label>
            <input 
              type="text" 
              placeholder="Enter search term" 
              name="search" 
              value={props.keyword} 
              onChange={(e) => props.setKeyword(e.target.value)}/>
        </label>
        <input type="submit" value="Find"/>
      </form>;

}
export default Search;


    
    //<form onSubmit={(e) => handleSubmit(e)}>
         {/* <label>Search <input type="text" value={keyword} onChange={(e) => { setKeyword(e.target.value); setSubmitted(false) }} /></label>
         <input type="submit" value="Submit" onSubmit={handleSubmit} id="submit-button"/> */}
        {/* <p style ={{color:"red"}}><em>{props.searchWord && 'Key word Typed:' + searchWord}</em></p> */}
      //  <form> 
      //   <p style={{color:"red"}}><em>{keyword && 'Keywords Typed: ' +keyword}</em></p>
      //   ...The rest of your form fields e.g<input/> <button/>
      //   </form>
  
// }
// const Search = (props) => {
//     //add input/submit button

//     return (
//         <form>
//             <input type="text" placeholder="Search" />
//             <button>Search</button>
            
//         </form>
//     )
// }

//         }
// export default Search;
