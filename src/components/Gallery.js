
import React, {useState} from 'react';
import '../styleSheets/gallery.css';
import '../styleSheets/picture.css'
import '../styleSheets/modal.css'
import { splashPics } from './data';
import Modal from './Modal';


        
function Gallery(){
        
  const [gallery, setGallery] = useState(false);
        
  const galleryClickHandler = () => {
    setGallery(!gallery);
  };

let text = 'Gallery';
let splashImg = <img src={splashPics[2]} alt="look" className="splash-img-right"/>
if(gallery){
  text = 'Close'
  splashImg = ''
}
let gallerySplash =
    <section className='gallery-text'>
    <p style={{cursor:'pointer'}}>{text}</p>
    {splashImg}
    </section>


// starting content in div

let content = <div className='content'><Modal/></div>

if(!gallery){
  content = null;
    }  

return(
  <>
      <div onClick={galleryClickHandler} className={!gallery ? 'gallery-container' : 'close-text'}>
      {gallerySplash}{gallery}
      </div>
      <div>{content}</div>
      </>
)
}


          
export default Gallery;
