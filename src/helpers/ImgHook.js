import React,{useState,useEffect} from 'react';
import './ImgHook.css';

function ImgHook({pic, alt}) {
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(null);
  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = pic;
    imageToLoad.onload = () => {
      setLoading(false);
      updateSrc(pic);
   }
 },[pic])
  return(
    <div className='img-container'>
      {!loading && (
        <img
          src={currentSrc}
          alt={alt}
        />
      )}
      {loading && (
        <div className="smooth-preloader">
          <span className="loader" />
        </div>
      )}
    </div>
  )
}
export default ImgHook;
