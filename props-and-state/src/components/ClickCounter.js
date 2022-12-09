import React, { useState } from 'react'

const ClickCounter = () => {
    const buttonStyleAdd = {"background-colour":"blue"};
    const buttonStyleSub = {"background-colour":"red", "margin": "0px, 300px, 0px"};
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Count: {count}</h2>
            <div>Click the button below to increment the counter</div>
            <button style={buttonStyleAdd} onClick={() => setCount(count + 1)}>Click!</button>
            <button style={buttonStyleSub} onClick={() => (count > 0) ? setCount(count - 1): count}>Subtract</button>
         </div>
    );
}

export default ClickCounter;