import React, { useState }  from 'react'
import logo from './logo.svg';

const Counter = {
    fontSize: "82px",
    backgroundColor:"black",
    borderRadius: "20px"
}
const Button =  {
fontSize:"28px",
padding: "10px",
backgroundColor:"white",
borderRadius: "15px"
}
 const Pizza = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <img src={logo} width="200"/>
            <h1>Pizza Order</h1>
            <h1 style={Counter}>{count}</h1>
            <button style={Button} onClick={() => setCount(count + 1)}>Take order</button>
            <br/>
            <br/>
            <button style={Button} onClick={() => setCount(count - 1)}>Cancel Order</button>
        </div>
    )
}
export default Pizza;