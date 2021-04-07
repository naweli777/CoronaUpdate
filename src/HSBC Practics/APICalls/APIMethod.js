const  axios = require('axios');

const url ="https://randomuser.me/api/";

const fetchData = async ()=>{
    try{
        const data = await axios.get(url);
        console.log(data.data.results[0].location.coordinates.latitude,data.data.results[0].location.coordinates.latitude )
        
    }catch(error)
    {
        console.error(error);
    }

}
fetchData();