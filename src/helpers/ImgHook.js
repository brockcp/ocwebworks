import React,{useState} from 'react';
import './ImgHook.css';

function ImgHook({pic, alt}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="img-container">
      <img
        src={pic}
        alt={alt}
        className={`smooth-image image-${
          imageLoaded ? 'visible' :  'hidden'
        }`}
        onLoad={()=> setImageLoaded(true)}
      />
        {!imageLoaded && (
          <div className="smooth-preloader">
            <span className="loader" />
          </div>
        )}
    </div>
  )
}
export default ImgHook;
