import axios from 'axios';
import React,{useEffect, useState} from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Rowpost from './components/Rowpost/Rowpost';
import {originals,action} from './Urls';
// import axios from 'axios';
import { API_KEY } from './constants/constants';

function App() {
 
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
     
    const array =res.data.results;
   
        setInfo(array[0])

   
       
    })
    
  },[])
  
 
  const [info,setInfo] = useState([])
 

  return (
    <div className="App">
      <Navbar />
      <Banner info ={info} />
      <Rowpost urls={originals} title="Netflix Originals" />
       <Rowpost urls={action} title="Action" isSmall />
    </div>
  )
  }


export default App
