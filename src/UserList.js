import axios from "axios";
import {useEffect,useState} from "react";
import * as React from "react"

export const UserList = () => {
const [listOfUser , setList] = useState([]);
useEffect(()=>
axios.get("https://jsonplaceholder.typicode.com/users")
.then((response)=>setList(response.data))
.catch(function(error){
    console.log(error);
}),[])
return(
    <div>
       {
          listOfUser.map((elt,key)=> <div key={key}> <li>{elt.name}</li> </div>)
       }
    </div>
)
}
