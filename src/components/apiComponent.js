import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';

export default () => {
  const [items, setItems] = useState([]);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500:1
  };  
  const handleClick = () => {
    const page = Math.floor(Math.random() * 33) + 1;
    fetch(`https://picsum.photos/v2/list?page=${page}`)
      .then(res => res.json())
      .then(result => setItems(result))
  }
  return(
  <div style={{width:"75%", margin:"auto"}}>
    <div style={{marginTop: '25px'}}>
      <div className="button api" onClick={handleClick}>Consultar API</div>
    </div>
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      {items.map((item, i) => 
        <div className="masonry-el" key={i}>
          <img src={item.download_url} style={{width: "100%"}} />
          <div style={{margin: '3px'}}>
            <span className="descriptor">Autor: </span>
            {item.author}
          </div>
          <div style={{margin: '3px'}}>
            <span className="descriptor">Alto: </span>
            {item.height}px
          </div>
          <div style={{margin: '3px'}}>
            <span className="descriptor">Ancho: </span>
            {item.width}px
          </div>
        </div>
      )}
    </Masonry>
  </div>
  )
}