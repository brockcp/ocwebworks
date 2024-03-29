import React from 'react';
import ImgHook from '../helpers/ImgHook';
import './Works.css';
import img1 from '../images/w-wp.png';
import img2 from '../images/w-t.png';
import img3 from '../images/w-w.png';
import img4 from '../images/w-ep.png';

const Works = () => {
  return(
    <div className="works">
      <h1>Works</h1>
      <div className="work">
        <div className='imgHook-container'>
          <ImgHook pic={img1}
                   alt='Wordpress Site'
          />
        </div>
        <div className='work-info'>
          <h1 className=''>Wordpress Sites</h1>
          <ul className=''>
            <li>Fully Customizable Themes</li>
            <li>Fully Responsive</li>
            <li><a href="https://ocwebworks.com/works/wordpress/"
                   target="_blank"
                   rel="noreferrer"
                   className="fancy-underline">
                  view site
                </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="work work-reverse">
      <div className='imgHook-container'>
        <ImgHook pic={img2}
                 alt='Business Site'
        />
      </div>
        <div className='work-info'>
          <h1 className=''>Business Sites</h1>
          <ul className=''>
            <li>Fully Responsive</li>
            <li><a href="https://ocwebworks.com/works/teboconsulting/"
                   target="_blank"
                   rel="noreferrer"
                   className="fancy-underline">
                  view site
                </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="work">
      <div className='imgHook-container'>
        <ImgHook pic={img3}
                 alt='Personal Site'
        />
      </div>
        <div className='work-info'>
          <h1 className=''>Personal Sites</h1>
          <ul className=''>
            <li>Fully Responsive</li>
            <li><a href="https://wojtekkfineart.com"
                   target="_blank"
                   rel="noreferrer"
                   className="fancy-underline">
                  view site
                </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="work work-reverse">
      <div className='imgHook-container'>
        <ImgHook pic={img4}
                 alt='Forum And User Site'
        />
      </div>
        <div className='work-info'>
          <h1 className=''>Forums & User Sites</h1>
          <ul className=''>
            <li>Fully Responsive</li>
            <li><a href="https://www.eigopost.com"
                   target="_blank"
                   rel="noreferrer"
                   className="fancy-underline">
                  view site
                </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Works;
