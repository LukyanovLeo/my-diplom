import React, { useState, useEffect } from 'react';
import './styles/4lkpicture.css';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import axios from 'axios';


export const LKPicture = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(0);
  
  const startAR = () => {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    const exportButton = document.getElementById('arButton');

    if (exportButton) {
      exportButton.addEventListener('click', exportModel);
    }

    function exportModel() {
      const scene = new THREE.Scene();
      const loader = new GLTFLoader();

      loader.load('https://www.theartnewspaper.ru/media/images/eeb65bec-dffe-4c83-90ba-fff72d66ca58.height-1290.jpg', function (gltf) {
        const model = gltf.scene;
        scene.add(model);
        
        const exporter = new GLTFExporter();
        exporter.parse(scene, function (gltf) {
          const gltfModel = JSON.stringify(gltf);
          const viewer = document.getElementById('myModelViewer');
          viewer.src = `data:model/gltf+json;base64,${window.btoa(gltfModel)}`;
        }, function (error) {});
      });

      document.body.appendChild(renderer.domElement);
      renderer.setSize(window.innerWidth, window.innerHeight);
      
      document.body.appendChild(VRButton.createButton(renderer));
      renderer.xr.enabled = true;

      renderer.setAnimationLoop(function () {
        renderer.render(scene, camera);
      });
    } 
    exportModel();
  };

  useEffect(() => {
    startAR();
  }, []); 

  const handleSearchClick = () => {
    setIsSearchVisible(true);
  };

  const handleSearchClose = () => {
    setIsSearchVisible(false);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setNewComment((event.target).value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      // const comment = {
      //   text: newComment
      // };
      const response = await axios.post('https://localhost:5555/work/1/comment/add', {text: newComment});

      setComments(comments => [...comments, newComment]);
      setNewComment('');
    }
  };

  return (
        <div className="v2_73">
            <div className="v2_75"></div>
            <div className="v2_84"></div>
            <div className="v2_93"></div>
            <div className="v37_24"></div>
            <span className="v2_88">ср. оценка</span>
            <div className="v2_85"></div>
            <span className="v2_94">тег</span>
            <div className="v37_10"></div>
            <div className="v37_6"></div>

            <div className="rating-scale">
              <span className="rating-label">Оценка:</span>
              <div className="rating-buttons">
                <button
                className={`rating-button ${rating === 1 ? 'active' : ''}`}
                onClick={() => handleRatingChange(1)}
                >
                1
                </button>
                <button
                className={`rating-button ${rating === 2 ? 'active' : ''}`}
                onClick={() => handleRatingChange(2)}
                >
                2
                </button>
                <button
                className={`rating-button ${rating === 3 ? 'active' : ''}`}
                onClick={() => handleRatingChange(3)}
                >
                3
                </button>
                <button
                className={`rating-button ${rating === 4 ? 'active' : ''}`}
                onClick={() => handleRatingChange(4)}
                >
                4
                </button>
                <button
                className={`rating-button ${rating === 5 ? 'active' : ''}`}
                onClick={() => handleRatingChange(5)}
                >
                5
                </button>
                </div>
              </div>

            <div className='write'>
              <textarea
                className='write-mes'
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Написать комментарий"
              />

                <button className='comment' onClick={handleCommentSubmit}>
                  <div className='comment1'></div>
                  <div className='comment2'></div>
                  <div className='comment3'></div>
              </button>
            </div>
            
            <button className="button" onClick={handleSearchClick}>
                <div className="button-inner">
                  <div className="button"></div>
                  <div className="lupa2"></div>
                  <div className="palka2"></div> 
                </div>
            </button>
            
            {isSearchVisible && (
            <div className="search-container">
              <div className="search-overlay" />
              <div>
                <input className="search-input" type="text" placeholder="Введите тег" />
                <button className="search-close-button" onClick={handleSearchClose}>X
                </button>
              </div>
             </div>
            )}

            <Link to="/lika:id" className="button-userp">
              <div className="button-container">
                <div className="button-inner">
                  <div className="v3_166"></div>
                  <div className="v29_43"></div>
                  <div className="v29_44"></div>
                </div>
              </div>
            </Link>

            
            <div className="v2_83"></div>
            <span className="v2_86">описание</span>
            <span className="v2_87">автор(логин)</span>
            
            <Link to="/ar" className='ar-button'>
              <span className="v37_25">VR</span>
            </Link>

            <div className='arButton'>
              <button id='arButton' className='ar-button'>
                <span className="v37_25">VR</span>
              </button>
            </div>
            <model-viewer
              id="myModelViewer"
              src="/eeb65bec-dffe-4c83-90ba-fff72d66ca58.height-1290.gltf"
              autoplay
              camera-controls
              shadow-intensity="0.5"
              background-color="#f0f0f0"
            ></model-viewer>
            
            <Link to="/" className="button-mainp">
              <div className="button-container">
                <div className="button-inner">
                  <div className="v54_63"></div>
                  <div className="v54_65"></div>
                  <div className="v54_66"></div>
                  <div className="v54_67"></div>
                </div>
              </div>
          </Link>
        </div>
  );
}