import React, { useState, useEffect} from "react";
import axios from "axios";

function Picture(props){
    const [info, setInfo] = useState([]);
    useEffect(()=>{
        const key = 'WG7ETQvGwkP36HbYGJOMyCcptrzHX7EUgJsI5PIg';
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
            .then(response=> {
                setInfo(response.data);
                console.log(response.data);
            })
            .catch(error=>console.log(error));
        
    },[]);
    return (
        <div>
        <img src={info.hdurl} alt="NASA"/>
        <h1>{info.title}</h1>
        <p>{info.date}</p>
        <p>{info.explanation}</p>
        </div>
    );
  }
  export default Picture;
    