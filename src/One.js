import React,{useState} from 'react'
import "./style.css"

const Main=()=>{
    let stick={color:"blue"}
    return(
        <h1 style={stick}>hello</h1>
    )
}


const Pager=()=>{
    return(
        <>
        <Main/>
        </>
    )
}


export default Pager