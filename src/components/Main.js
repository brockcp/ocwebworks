import React from 'react';
import imageUrl from '../ocbg.png';
import './Main.css';

const Main = () => {
  return(
    <div className='main'>
      <div className='bg fadein'
           style={{backgroundImage: `url(${imageUrl})` }}
           alt="main background"
      >
      </div>
      <div className='callout'>
        <h1>
          <span className='one'>OCwebworks</span> provides website creation,
          renovation and web consulting in South Orange
          County, CA.
        </h1>
        <p>
          It's a small operation here, just me, a guy named Brock. But, Ive got
          12 years experience building web applications and an
          ethical compass that always points toward client satisfaction.
          </p>
          <p>So, if you are in need of a website, some new paint or tires for
          your current one, or just have a few questions, send me an email and I'll
          be happy to help in any way I can.
        </p>
        <p>
          Below are some examples of what I do.
        </p>
      </div>
    </div>
  )
}
export default Main;
