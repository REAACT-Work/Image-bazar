import React, { useState } from 'react';
import ImageSearch from './Components/ImageSearch';
import ImageGallery from './Components/ImageGallery';

const App = () => {
  const [imageList, setImageList] = useState([]);

  return (
    <div>
      <div className='head shadow-lg head1  sticky-top border-none'>
        <h1 className='d-flex justify-content-md-center pt-3 text-white shadow-lg '>SnapVerse</h1>
        <p className='d-flex justify-content-md-center text-white shadow '>See the World Through Our Lens </p>
        <ImageSearch setImageList={setImageList} />
      </div>
      
      
      <ImageGallery imageList={imageList} /> 
    </div>
  );
};

export default App;
