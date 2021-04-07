const axios = require('axios');
const url ="https://randomuser.me/api/";

const fetchData = ()=>{
    try{
        axios.get(url)
        .then((res)=>console.log(res.data))
        .catch((error)=>console.log(error));
        
    }catch(error){
        console.log(error);
    
    }
}
fetchData();