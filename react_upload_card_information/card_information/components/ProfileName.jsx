import { useEffect, useState } from 'react'
import { data } from '../../src/data'
export default function ProfileName(){
    const [ name, setName] = useState()
    useEffect(function(){
        data.map(item=>{
            setName(item.name)
        })
    },[])
    return (
        <>
          <p className="profile-name">{name}</p>      
        </>
    )
}