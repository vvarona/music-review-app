import React, { useState } from "react";


export default function RateSlider() {

    const [value, setvalue] = useState(0); 
    const changeValue = (event) =>{
        setvalue(event.target.value)
    }

    return (
        <>
        <label htmlFor="rate">Rate</label>
        <input type="range" name="rate" id="rate" min="0" max="10" value={value} onChange={changeValue}/>
        <p>Rating: {value}</p>
        </>
    )
}