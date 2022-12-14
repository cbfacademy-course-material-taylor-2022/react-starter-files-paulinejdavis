import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import data from './models/headphones.json';
import ClickCounter from './components/ClickCounter'

import GadgetList from './components/GadgetList';
const mainStyle = {"fontFamily":"Arial"};

const App = () => {
  const headphones =  [{"title":"Headphones 1", "price": 358.99},{"title":"Headphones 2", "price": 358.99},{"title":"Headphones 3", "price": 358.99},{"title":"Headphones 4", "price": 358.99},{"title":"Headphones 5", "price": 358.99}];
  const [headphonesList] = useState(data);

  return <section style={mainStyle}>
    <h1>Electronics Store</h1>
    <GadgetList items={headphonesList}/>
    <ClickCounter/>
  </section>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
