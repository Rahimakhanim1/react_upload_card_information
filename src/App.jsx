"use client"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileImage from '../card_information/components/ProfileImage'
import ProfileName from '../card_information/components/ProfileName'
import ProfilePosition from '../card_information/components/ProfilePosition'
import ProfileDescription from '../card_information/components/ProfileDescription'
import Upload from '../upload_data/components/Upload'

function App() {
  const [count, setCount] = useState(0)
  var values = [];

  for (var i=0; i<200; i++){
    values.push("span"+String(i))
  }

  return (
    <>
      <section id="main">
    
        {values.map(function(value){
          return <span key={value}></span>
        })}
         
        <div className="main-container">
            <div class="card-container">
                <Upload/>
            </div>
        
            <div className='card-container'>
                <ProfileImage></ProfileImage>
                <ProfileName></ProfileName>
                <ProfilePosition></ProfilePosition>
                <ProfileDescription></ProfileDescription>
              
                <div className="btn">
                    <button>Hire me</button>
                </div>
                                
            </div>

          
            
             
        </div>
       </section>
        
   


    </>
  )
}

export default App
