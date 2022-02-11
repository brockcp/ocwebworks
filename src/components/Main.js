import React from 'react';
import bg from '../ocbg.png';
import './Main.css';

const Main = () => {
  return(
    <div className="main">
      <img src={bg}
           className="bg fadein"
           alt="main background"
      />
      <div className='callout'>
        <h1>
          OCwebworks provides website creation, renovation and
          web consulting to businesses in Southern Orange County.
          San Juan Capistrano to be exact.
        </h1>
      </div>
    </div>
  )
}
export default Main;
