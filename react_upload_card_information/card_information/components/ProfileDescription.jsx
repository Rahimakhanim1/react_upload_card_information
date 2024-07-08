import {useState, useEffect } from 'react'
import {data} from '../../src/data'

export default function ProfileDescription(){
    const [ description, setDescription ] = useState()
    useEffect(function(){
        data.map(item=>{
            setDescription(item.desciption)
        })
    },[])
    return(
        <>
             <p className="profile-description">{description}
            </p>
        </>
    )
}