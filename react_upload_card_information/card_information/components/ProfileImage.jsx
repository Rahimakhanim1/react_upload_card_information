import { useEffect, useState } from 'react'
import { data } from '../../src/data'
export default function ProfileImage(){
    const [ photo, setPhoto] = useState()
    useEffect(function(){
        data.map(item=>{
            setPhoto(item.img)
        })
    },[])
    return (
        <>
          <div className="profile-img">
                <img src={photo}/>
            </div>
        
        
        </>
    )
}