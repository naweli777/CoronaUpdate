import React,{useState} from 'react';

function HookCounterThree(){
    const[names,setNames] =useState({firstName:'',lastName:''})   //here it is object and it can be anything,object,boolean,array,string
    return(
        <>
        <form>
            <input type="text" value={names.firstName} onChange={e=>setNames({firstName:e.target.value})}/>
            <input type="text"value={names.lastName} onChange={e=>setNames({lastName:e.target.value})}/>
            <h2>First Name is {names.firstName}</h2>
            <h2>Last Name is {names.lastName}</h2>

        </form>
        </>
    )
}
export default HookCounterThree;