import '../styleSheets/contact.css'
import { useState } from "react";
import { splashPics } from "./data";
import { socialsObj } from "./data"

function Contact(){

let content =
<section className="social-icons">
{socialsObj.map(pic => <a href={pic.link}><img src={pic.image} alt={pic.alt} className={pic.className}/></a>)}
</section>

// const [display, setDisplay] = useState('');

// const displayClickHandler = () =>{
//   !display ?
//   setDisplay(content):
//   setDisplay('')
//   };

let contactImage = <img src={splashPics[1]} alt="block" className="contact-splash-img" id="left"/>
 

return(
    <section>
    <div className='contact-card'>
        {contactImage}
        <div className='text-image-position'>
        <p>Connect</p>
        <div className='socials-card'>
        {content}
        </div>
        </div>
    </div>
    </section>
    )
}

export default Contact;