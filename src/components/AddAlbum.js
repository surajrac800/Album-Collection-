import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const AddAlbum = (props) => {

  //this function get all the input like userid and title then call add album function to add it on the album list
  const getAlbumFormData = () => {
    const userId = document.getElementById('userid').value;
    const title = document.getElementById('title').value;
    props.addAlbumToList(Number(userId), title)
  }

  return (
    <>
      <Navbar path="/" page="Home" />
      <div className='addalbum-container'>
        <div className='addalbum-form'>
          <h4>Album Details</h4>
          <div className='inp-container'>
            User Id :
            <input id='userid' type="email" placeholder='suraj@gmail.com' required />
          </div>
          <div className='inp-container'>
            Title :
            <input id='title' type="text" placeholder='A Summer Spent Seaside' required />
          </div>
          <div>
            <Link to="/"><button onClick={getAlbumFormData}required>Save</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddAlbum
