import React from 'react';
import './Works.css';
import img1 from '../works-wordpress.jpg';
import img2 from '../works-tebo.jpg';
import img3 from '../works-wojtek.jpg';
import img4 from '../works-ep.jpg';

const Works = () => {
  return(
    <div className="works">
      <div className="work">
        <img src={img1}/>
        work1
      </div>
      <div className="work">
        <img src={img2}/>
        work2
      </div>
      <div className="work">
        <img src={img3}/>
        work3
      </div>
      <div className="work">
        <img src={img4}/>
        work4
      </div>
    </div>
  )
}
export default Works;
