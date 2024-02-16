import React from 'react';

const ImageGallery = ({ imageList }) => {

  function handleDownload(url) {
   
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'image'; 
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  return (
    <div className="paro">
      {imageList.map((item) => (
        <div key={item.id} className="image-item d-flex  flex-column align-items-center justify-content-around mt-3 " > 
          <img
            src={item.urls.small_s3}
            alt={item.alt_description}
            className="image_style pt-5 col-16 mx-2 rounded"
          />
          <button onClick={() => handleDownload(item.urls.full)} className=" mt-2 text-primary  rounded-circle border">
           download
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
