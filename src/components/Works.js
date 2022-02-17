import React from 'react';
import './Works.css';
import img1 from '../works-wp.png';
import img2 from '../works-tebo.png';
import img3 from '../works-wojtek.png';
import img4 from '../works-ep.png';

const Works = () => {
  return(
    <div className="works">
      <h1>Works</h1>
      <div className="work">
        <img src={img1}
             alt='image1'/>
        <div className='work-info'>
          <h1 className=''>Wordpress Sites</h1>
          <ul className=''>
            <li>Initial Setups</li>
            <li>Configurations</li>
            <li>Fully Customizable Themes</li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="work work-reverse">
        <img src={img2}
             alt='image1'/>
        <div className='work-info'>
          <h1 className=''>Business Sites</h1>
          <ul className=''>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="work">
        <img src={img3}
             alt='image1'/>
        <div className='work-info'>
          <h1 className=''>Personal Sites</h1>
          <ul className=''>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="work work-reverse">
        <img src={img4}
             alt='image1'/>
        <div className='work-info'>
          <h1 className=''>Forums & User Sites</h1>
          <ul className=''>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Works;
