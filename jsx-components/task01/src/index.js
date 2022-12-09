import React from 'react';
import ReactDOM from 'react-dom/client';

const name = 'Pauline';
const names = 'Pauline'

function Profile(name){
  if (name.toUpperCase() === names.toUpperCase()){
    return <main id="content" role="main" className="base">
    <h1>{name}'s' React Page</h1>
      <p>Here is my bio. Isn't it great.</p>
    </main>
  } else if (name != "") {
    return <main id="content" role="main" className="base">.
    <h1>{name}'s' React Page</h1>
      <p>This is JSX in action.</p>
    </main>
  } else {
    return <main id="content" role="main" className="base">
    <h1>This is a React Page</h1>
      <p>Not much going on</p>
    </main>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Profile());

