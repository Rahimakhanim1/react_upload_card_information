"use client"
import {useState, useEffect} from 'react';
import '../Upload.css';
import axios from "axios";

export default function Upload(){
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
    name: '',
    job: '',
    description: ''
  });

  const [message, setMessage] = useState('');

  // Handle input changes for text fields
  const onInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle file change
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

 
  const onSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
   
    data.append('name', formData.name);
    data.append('job', formData.job);
    data.append('description', formData.description);
    
    data.append('image', file);

    try {
      const res = await axios.post('http://localhost:5000/upload', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        
        }
      });

      setMessage(res.data.message);

    } catch (err) {

      if (err.response.status === 400) {
        setMessage(err.response.data.error);
        
      } else {
        setMessage('There was a problem with the server');
      }
    }
  };

  return (
    <>
         <form onSubmit={onSubmit}>   
            <div className="form-item">           
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onInputChange}
            placeholder='Your Name'
            required
            />
            </div>
            <div className="form-item">           
            <input
            type="text"
            name="job"
            placeholder='Your Position'
            value={formData.job}
            onChange={onInputChange}        
            />
        </div>
        <div className="form-item-description">
            <textarea
            name="description"
            value={formData.description}
            onChange={onInputChange}
            placeholder='Description'
            cols = "32"
            rows = '5'
            
            required
            />
        </div>
        <div>
            <label>Choose Your Image:</label><br></br>
            <input
            id="files"
            multiple
            type="file"
            // name="image"
            // accept="image/*"         
            onChange={onFileChange} 
            required
            />
        </div>
        <button type="submit">Submit</button>
        </form>

    </>
 
  ); 
}