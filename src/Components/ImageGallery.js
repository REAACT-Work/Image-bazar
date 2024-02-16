import React from "react";

const ImageGallery=({imageList})=>{

    return(
        <div className="paro">{
            imageList.map((item)=>(
                <img 
                    src={item.urls.small_s3} 
                    alt={item.alt_description}
                   className="image_style pt-5 col-5 mx-2 rounded" />
            ))
            }
        </div>
    )
}
export default ImageGallery;