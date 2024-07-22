import { useEffect, useState } from 'react';
import axios from "axios";

export default function ProfileName(){
    const [ name, setName] = useState()

    useEffect(() => {
      axios.get('http://localhost:5000').
      then(response => setName(response.data.name)).
      catch(err => console.log('Error'));
     }, []);

    return (
        <>
          <p className="profile-name">{name}</p>      
        </>
    )
}