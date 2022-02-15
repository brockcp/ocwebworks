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
          OCwebworks provides website creation,
          renovation and web consulting in South Orange
          County, CA.
        </h1>
        <h3>
          Whether you are in need of a brand new site or
          some help with your current one, we will be happy
          to help in any way we can.
        </h3>
        <h3>
          Below are some examples of the work we do.   
        </h3>
      </div>
    </div>
  )
}
export default Main;
