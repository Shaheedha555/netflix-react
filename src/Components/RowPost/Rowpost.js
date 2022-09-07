import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './Rowpost.css'
import axios from '../../axios'
import { image_url,API_KEY } from '../../constants/constants'
function Rowpost(props) {
    const [rowImg,setRowImg]=useState([])
    useEffect(()=>{
        axios.get(props.url).then((response)=>{

            setRowImg(response.data.results)
        })
    })
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1
        }
    }
    const [urlId,setUrlId] = useState('')
    const handleClick=(id) =>{
        axios.get(`/${props.type}/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(response.data.results.length > 0 ){
                setUrlId(response.data.results[0])
            }else{
                console.log('empty results');
            }
        })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
               { rowImg.map((item)=>{
                return <img onClick={()=>handleClick(item.id)} className={`${props.isSmall ? 'poster' : 'small-poster'}`} alt='poster' src={`${image_url+ item.backdrop_path}`} />
               })
               }
            </div>
           {urlId && <Youtube opts={opts} videoId={urlId.key} />}
        </div>
    )
}

export default Rowpost