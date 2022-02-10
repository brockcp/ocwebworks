import React from 'react';
import bg from '../ocbg.png';
import './Main.css';

const Main = () => {
  return(
    <div className="main">
      <img src={bg}
           className="bg fadein"
      />
      <div className=''>Hello There. My name is Brock and I build websites in Southern Orange County, San Juan Capistrano to be specific.
      </div>
    </div>
  )
}
export default Main;
