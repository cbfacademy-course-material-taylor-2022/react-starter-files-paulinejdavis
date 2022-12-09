import React from 'react';
import './styles.css'
import PropTypes from 'prop-types'

const Book = (props) => {
  const {id,
    saleInfo: {retailPrice},
    volumeInfo: {
      title,
      authors,
      description,
      imageLinks: {thumbnail}
    }
    } = props.book;
    
 return (
<main>
  <div key={id} className="book">
  <img src={thumbnail} alt={title} />
  </div>
  <div>
    <h3>{title}</h3>
  </div>
  <p>{authors ? authors.join(', ') : "come back soon"}</p>
  {/* <img src={thumbnail} alt={title}></img> */}
  {retailPrice && <p>£{retailPrice.amount}</p>}
  {description && <p>{description}</p>}
  {/* {description ? description.substring(0, 300)+ " " : "no description"} */}
  <div>
  <button type="button" onClick={() => props.addBook(props.book)}>Add to Bookcase</button>
</div>

</main>)

}

Book.propTypes = {
  volumeInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
  	authors: PropTypes.array.isRequired,
  	description: PropTypes.string.isRequired,
    imageLinks: PropTypes.shape({
      "thumbnail": PropTypes.string.isRequired
    })
  }),
  saleInfo: PropTypes.shape({
  	retailPrice: PropTypes.shape({
      "amount": PropTypes.number.isRequired 
    })
  })
};

Book.defaultProps = {
  saleInfo : {
		retailPrice : {
      amount: 'No price provided'
    }
  }
};

export default Book;

// function Book() {
//   return "This is the output of a book component. Replace this string with code to display an individual book's attributes.";
// }

// export default Book;
