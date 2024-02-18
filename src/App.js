import React, { useState } from 'react';
import ImageSearch from './Components/ImageSearch';
import ImageGallery from './Components/ImageGallery';

const App = () => {
  const [imageList, setImageList] = useState([]);

  return (
    <div>
      <nav class="navbar  bg-body-tertiary sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand">SnapVerse</a>
          <form class="d-flex">
            <p>Home</p>
            <p>Explore</p>
            <p>More</p>
            </form>
            </div>
            </nav>
      <div className='head shadow-lg head1  border-none'>
        <h1 className='d-flex justify-content-md-center pt-3 text-white pt-5 text-shadow'>SnapVerse</h1>
        <p className='d-flex justify-content-md-center text-white pt-2 text-shadow'>See the World Through Our Lens </p>
        <ImageSearch setImageList={setImageList} />
      </div>
      
      
      <ImageGallery imageList={imageList} /> 
    </div>
  );
};

export default App;
