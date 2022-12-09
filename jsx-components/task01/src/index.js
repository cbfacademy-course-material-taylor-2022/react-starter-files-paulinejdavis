import React from 'react';
import ReactDOM from 'react-dom/client';

const name = 'Pauline';

function Profile(name){
    return <main id="content" role="main" className="base">
            <h1>Pauline's React Page</h1>
              <p>Here is my bio. Isn't it great.</p>
            </main>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Profile());

