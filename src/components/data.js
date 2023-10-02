import Modal from './Modal'
//main pic
import main from './main.jpg'

//gallery pics
import frontProfile from './pictures/gallery/front-profile.jpg';
import boStaff from './pictures/gallery/bo-staff.jpg';
import jumpyBoi from './pictures/gallery/jumpy-boi.jpg';
import streetBattle from './pictures/gallery/street-battle.png';
import zenStatue from './pictures/gallery/zen-statue.jpg';
import spartan from './pictures/gallery/spartan.jpg';
import certificate from './pictures/gallery/certificate.jpg';
import intenseFace from './pictures/gallery/intense-face.jpg';
import matrix from './pictures/gallery/matrix.jpg';
import oceanSquat from './pictures/gallery/ocean-squat.jpg';

//splash pics
import shift from './pictures/splash-img/shift.jpg';
import block from './pictures/splash-img/block.jpg';
import look from './pictures/splash-img/look-up.jpg';

import email_icon from './pictures/socials/email.png';
import instagram_icon from './pictures/socials/instagram.png';
import facebook_icon from './pictures/socials/facebook.png';

export const picturesObj = [
    {image: frontProfile, alt: 'front profile', className: 'item1', key: 1}, 
    {image:boStaff, alt:'bo staff', className:'item2'}, 
    {image:jumpyBoi, alt:'jumpy boi', className:'item3'}, 
    {image: streetBattle, alt: 'battle in the street', className:'item4'}, 
    {image: zenStatue, alt:'zen statue', className:'item5'}, 
    {image:spartan, alt:'spartan', className:'item6'}, 
    {image:certificate, alt:'certificate', className:'item7'}, 
    {image:intenseFace, alt:'intense face', className:'item8'}, 
    {image:matrix, alt:'matrix', class:'item9'}, 
    // {image:casualFull, alt:'casual in park', class:'item10'}, 
    // {image:oceanSquat, alt:'squatting by ocean'}
]; 

export const socialsObj =[
    {image: email_icon, alt: 'email icon', className: 'social-icon email-icon', link:'mailto:Christianelmariachi@gmail.com'}, 
    {image:facebook_icon, alt:'facebook icon', className:'social-icon facebook-icon', link:'https://www.facebook.com/A.Human.Just.Being'}, 
    {image:instagram_icon, alt:'instagram icon', className:'social-icon instagram-icon', link:'https://www.instagram.com/student_of_shaolin/'} 
]

export const pictures = [frontProfile, boStaff, block, jumpyBoi, streetBattle, zenStatue, spartan, certificate, intenseFace, matrix]

export const splashPics = [shift, block, look];

export const mainPic = {main: main};