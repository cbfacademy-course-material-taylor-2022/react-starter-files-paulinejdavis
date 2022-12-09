import React from 'react';

const GadgetList = (props) => {

  return (
    <main>
      <h2>Headphones</h2>
       <img src='../public/imgs/dre_beats1.png' alt='images'/>
      {props.items.map((item) => (<div>{item.title} {item.price}</div>))}
    </main>
  );
}

export default GadgetList;
