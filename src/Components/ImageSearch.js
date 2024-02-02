import React, { useState,useEffect } from 'react'
import axios from "axios"
import "./Image.css"

const ImageSearch = ({setImageList}) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(()=>{
    handleSearch()
  },[])
 
 

  function handleSearch(e) {
    if(e){
    e.preventDefault();
  }

    axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        "Accept-Version": "v1",
        Authorization: "Client-ID 2vCU1IDj_DX-50ki15f0laDIOOhBc_SBOA3JmkoHxZo",
      },
      params: {
        query: searchQuery || "random",
      },
    })
      .then((response) => {
        console.log(response.data);
        setImageList(response.data.results);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search image that you are looking for...."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        className='inputtag mt-5 mx-5  p-2 rounded-lg'/>
        <button className='p-2 btn-md btn-dark shadow rounded' type="submit">Search</button>
      </form>
    </div>
  )
}

export default ImageSearch