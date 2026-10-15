import React from "react";
const button=({name,onClick})=>{
    return(
        <button className="greet" onClick={onClick}>{name}</button>
    )
}
export default button