import React from 'react'
import Wheel from "./Wheel.js"

export default function Bicycle(props){
    let wheels = [];
    for (let i=0; i<props.numberOfWheels; i++){
        wheels.push(<Wheel key={i}/>);
    }
    <>
    return<h2>Good Morning, I am a Bicycle! I have {props.numberOfWheels} wheels</h2>;
    {wheels}
    </>
}