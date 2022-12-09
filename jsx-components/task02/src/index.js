import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './Profile';

function App() {
  return (
    <Profile name="Pauline" bio="Here is my bio. Isn't it great."/>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

