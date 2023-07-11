import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const UpdateAlbum = (props) => {
  
  const getUpdateData = () => {
    const id = props.album.id;
    let updateTitle = document.getElementById('title').value;
    let updateUserid = document.getElementById('user-id').value;

    if (updateTitle === '') {
      updateTitle = props.album.title;
    }
    if (updateUserid === '') {
      updateUserid = props.album.userId;
    }
    props.updateAlbumInList(id, updateTitle, Number(updateUserid), props.album);
  }

  return (
    <>
      <Navbar path="/" page="Home" />
      <div className='update-album'>
        <div className='form-container'>
          <div className='inp-container'>
            User Id:
            <input id='user-id' type="email" placeholder='raj@gmail.com' required />
          </div>

          <h4>{props.album.file}</h4>
          <div className='inp-container'>
            New Title:
            <input id='title' type="text" placeholder='Spent Seaside' required />
          </div>

          <Link to='/'><button type='submit' onClick={getUpdateData}>Save</button></Link>
        </div>
      </div>
    </>
  )
}

export default UpdateAlbum;
