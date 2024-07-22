import { useEffect, useState } from 'react'
import axios from "axios";
import path from 'path';
export default function ProfileImage(){
    const [img, setImg] = useState()
    useEffect(() => {
        axios.get('http://localhost:5000').
        then(response => setImg(response.data.path)).
        catch(err => console.log('Error'));
       }, []);
       const imgPath = "../src/" + img
       console.log(img)
    return (
        <>
          <div className="profile-img">
                <img src={imgPath}/>
    
            </div>
        
        
        </>
    )
}