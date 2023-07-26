import  { useState } from 'react';
import axios from './axios';
import './Post.css';

const Post = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState();
  const [successScreen, setsuccessScreen] = useState(false)

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImageUrl(URL.createObjectURL(file));
  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name) {
            setError("Please Fill in Your Email Address")
        }
    if (!image | !imageUrl) {
            setError("You must add an image or Image Url")
        }
    try {
      setUploading(true);
       const config = {
                headers: {
                    "Content-type": "application/json",
                },
      };
      
      await axios.post('/cards',
        {
          name,
          imgUrl: imageUrl || image, // Use the image URL if provided, otherwise use the uploaded image
        },
        config
      );
      
      setUploading(false);
      setsuccessScreen(true)
      setError(false)
    } catch (error) {
      setError(error.response.data.message)
      setUploading(false);
    }
  };

  return (
    <div className="post-container">
      <h2 className='c-r-p'>Create a Post</h2>
      {error &&
        <div className='p-2'>
        <p className="text-red-500 font-bold">{error} !!</p>
        </div>
             }
      <div className="input-container">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e=>setName(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="image">Upload Image:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        {imageUrl && <img src={imageUrl} alt="Uploaded" className="preview-image" />}
      </div>
      <div className="input-container">
        <label htmlFor="imageUrl">Paste Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={e=>setImageUrl(e.target.value)}
        />
      </div>
      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={uploading}>
        {uploading ? 'Uploading...' : 'Submit'}
      </button>
    </div>
  );
};

export default Post;
