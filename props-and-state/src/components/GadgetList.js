import React from 'react';

const GadgetList = (props) => {
    const styleTitle = {"fontweight": "italics"};
    const stylePrice = {"fontweight": "bold", "colour": "brown"};

  return (
    <main>
      <h2>Headphones</h2>
      {props.items.map((item) => (
      <div>
        <p style ={styleTitle} >{item.title}</p>
        <p style = {stylePrice} >{item.price}</p>
        <img src={item.src} alt=''/>
        </div>))}
    </main>
  );
}

export default GadgetList;
