import {useState,useEffect} from 'react'
import {data} from '../../src/data'

export default function ProfilePosition(){
    const [position, setPosition] = useState()
    useEffect(function(){
        data.map(item=>{
            setPosition(item.position)
        })
    },[])

    return(
        <>
            <p className="profile-position">{position}</p>
         </>
    )
   
}