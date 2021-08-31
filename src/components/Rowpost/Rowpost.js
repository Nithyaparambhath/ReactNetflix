import React, { useEffect, useState } from 'react';
import './Rowpost.css';
import axios from 'axios';
import {imageUrl,API_KEY} from '../../constants/constants'
import YouTube from 'react-youtube';
function Rowpost({title,urls,isSmall}) {

    const [movies,setMovies] =useState([]);

    const [movieKey,setMovieKey] = useState('')

    useEffect(()=>{
        axios.get(urls).then((res)=>{
            setMovies(res.data.results);
            console.log(res.data.results);
        })
    },[])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }

    const handleMovie = (id)=>{
       
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
            console.log(res.data.results[0]);
        if(res.data.results!==0){
                setMovieKey(res.data.results[0])
            }else{
                console.log('error');
            }
       
        })
    }

    return (

        

        <div className = "row">
            <h2>{title}</h2>
             
            <div className="posters">

                                          
            {movies.map((obj)=>

<img onClick={()=>handleMovie(obj.id)} className={isSmall ? "smallPoster" : "poster"} src={`${imageUrl +obj.backdrop_path}`} alt="poster-img" />
            )}
           
            
            
            </div> 

         {movieKey && <YouTube videoId={movieKey.key} opts={opts} /> }     

        </div>
    )
}

export default Rowpost
