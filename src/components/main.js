import React, { useState, useEffect} from "react";
import axios from "axios";
import {Main, Img, Upper, Lower, Title, Date, Description} from "./styles"

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
        <Main>
            <Upper>
                <Img src={info.hdurl} alt="NASA"/>
            </Upper>
            <Lower>
                <Title>{info.title}</Title>
                <Date>{info.date}</Date>
                <Description>{info.explanation}</Description>
            </Lower>
        </Main>
    );
  }
  export default Picture;
    