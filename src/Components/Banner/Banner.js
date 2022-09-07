import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import { API_KEY } from '../../constants/constants'
import { image_url } from '../../constants/constants'
import './Banner.css'
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}`).then((response)=>{
            let item = response.data.results[Math.floor(Math.random()*(response.data.results.length))]
            console.log(item);
            setMovie(item)
            console.log(movie);
        })

    },[])
    return (
        <div 
         className='banner' style={{backgroundImage: `url(${movie ? image_url+movie.backdrop_path : "" })` }}>
            <div className='content' >
                <h1 className='title'>{movie ? movie.title ? movie.title : movie.original_name : ""}  </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ""}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner