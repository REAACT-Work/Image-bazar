import React, {useState}from 'react'
import ImageSearch from './Components/ImageSearch'
import ImageGallery from './Components/ImageGallery';


const App=()=> {
  const [imageList,setImageList]=useState([]);
  return (
    <div>
      <div className='border head shadow-lg head1'>
      <h1 className='d-flex justify-content-md-center pt-5 text-white '>Image App</h1>
      <p className='d-flex justify-content-md-center pb-2  text-white  '>Get What You Want And Get Better Result </p>
      </div>
      <ImageSearch setImageList={setImageList}/>
      <ImageGallery imageList={imageList}/>
    </div>
  )
}

export default App
