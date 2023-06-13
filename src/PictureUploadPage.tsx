import { useRef, useState } from 'react';
import React from 'react';
import './styles/5loadpicture.css';
import { Link, useNavigate } from 'react-router-dom'
import { IPicture } from './models/IPicture';
import axios from 'axios';

export const PictureUploadPage = () => {

  const fileInputRef = useRef<any>(null);
  const navigate = useNavigate();

  const [newPicture, setNewPicture] = useState<File>();
  const [newPictureUrl, setNewPictureUrl] = useState('');
  const [tag, setTag] = useState('');
  const [description, setDescription] = useState('');

  const submitPictureUploadHandler = () => {
    fileInputRef.current?.click();
  };

  const uploadPictureHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setNewPicture(file);
    setNewPictureUrl(URL.createObjectURL(file));
  };

  const changeTagHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setTag((event.target as HTMLTextAreaElement).value);
  };

  const changeDescriptionHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const val = event.target as HTMLTextAreaElement;
    setDescription((event.target as HTMLTextAreaElement).value);
  };

  const saveImageHandler = async (event: React.FormEvent) => {
    const picture: IPicture = {
      tag: tag,
      description: description,
      picture: newPicture,
    };
    try {
      const response = await axios.post('http://localhost:5555/work/add', picture, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    }
    catch (e) {
      console.error(e);
    }
    navigate('/lika:id'); // Переход на другую страницу
  };


  return (
    <div className="v2_127">
      <input
          type="file"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={uploadPictureHandler}/>
      <button className="v2_128" onClick={submitPictureUploadHandler}>
        <div className="name"></div>
        <div className="v29_37"></div>
      </button>
      <div className="image-container">
        {newPicture && (
          <img src={newPictureUrl} alt="Загруженное изображение" className="uploaded-image" />
        )}
      </div>

      <div className="input-box-2">
        <input
          className="input-2"
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder="Добавьте тег">
        </input>
      </div>

      <div className="input-box">
        <input
          className="input"
          type="text"
          value={description}                
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Добавьте описание">
        </input>
      </div>
          
        {/* <Link to="/lika:id" className="button-lkz"> */}
          <div className="button-container" onClick={saveImageHandler}>
            <div className="button-inner">
              <div className="v2_140"></div>
              <div className="v4_26"></div>
              <div className="v4_27"></div>
              <div className="v4_28"></div>
            </div>
          </div>
        {/* </Link> */}

      {/* <Link to="/lika:id" className="button-lk">
        <div className="button-container">
          <div className="button-inner">
            <div className="v54_88"></div>
            <div className="v54_90"></div>
            <div className="v54_91"></div>
            <div className="v54_92"></div>
          </div>
        </div>
      </Link> */}
    </div>
  );
};