import React from 'react';
import imageUrl from '../images/ocbg.png';
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
          <strong>OCwebworks</strong> provides website
          <strong> creation</strong>,
          <strong> renovation</strong> and
          <strong> consulting</strong> in South Orange
          County, CA.
        </h1>
        <p>
          It's a small operation here, just me, a guy named Brock.
          But, I've got
          12 years experience building web applications and an
          ethical compass that always points toward
          <strong> absolute </strong>
          client satisfaction.
        </p>
        <p>
          Below are some examples of what I do.
        </p>
      </div>
    </div>
  )
}
export default Main;
