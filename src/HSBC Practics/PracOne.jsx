import React from 'react';
import ClassComp from './ClassComp';


const PracOne = (props)=>{
    return(
        <>
    <h1>Hello {props.name}</h1>
    <Try age ="22"/>
    
    </>
    
    );
};
const Try =(props)=>{
    return(
        <>
        <h1>I am {props.age}</h1>
        <ClassComp name="Harry"/>
        

        </>
    );
};

export default PracOne;