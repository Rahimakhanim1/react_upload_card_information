import {useState,useEffect} from 'react';
import axios from "axios";

export default function ProfilePosition(){
    const [position, setPosition] = useState()
    useEffect(() => {
        axios.get('http://localhost:5000').
        then(response => setPosition(response.data.job)).
        catch(err => console.log('Error'));
       }, []);
 

    return(
        <>
            <p className="profile-position">{position}</p>
         </>
    )
   
}