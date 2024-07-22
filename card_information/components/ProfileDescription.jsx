import {useState, useEffect } from 'react'
import axios from "axios";


export default function ProfileDescription(){
    const [ description, setDescription ] = useState()
    
    useEffect(() => {
        axios.get('http://localhost:5000').
        then(response => setDescription(response.data.description)).
        catch(err => console.log('Error'));
       }, []);
 
 
    return(
        <>
             <p className="profile-description">{description}</p>
        </>
    )
}