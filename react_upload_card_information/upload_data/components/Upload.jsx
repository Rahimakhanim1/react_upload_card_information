import {useState, useEffect} from 'react'
import {data} from '../../src/data'
import './Upload.css'

export default function Upload(){
    const [formData, setFormData] = useState({
        name: '',
        job: '',
        description: '',
        image: null,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to server or display it
        console.log(formData);
      };
    return(
        <>
           <form style={{zIndex:"1000"}} onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label>Job:</label>
            <input
            type="text"
            name="job"
            value={formData.job}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label>Description:</label>
            <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label>Image:</label>
            <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
            />
        </div>
        <button type="submit">Submit</button>
    </form>
        </>
    )
}