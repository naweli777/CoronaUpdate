import React,{useState} from 'react';

function HookCounterFour(){
    const[items,setItems]  = useState([])  //Empty Array

    const addItem =()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
    return(
        <>
        <button onClick={addItem}>Add Items</button>
        <ul>
            {items.map(item =>(
                <li key={item.id}>{item.value}</li>
            ))}
        </ul>
        </>
    )
}
export default HookCounterFour;