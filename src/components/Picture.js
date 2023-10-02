import { pictures } from "../data"
import '../styleSheets/picture.css'


function Picture(){

    return(
        <div className={pictures.map(pic => pic.class)}>
           <figure>
           { pictures.map(pic => <img src={pic.image} alt={pic.alt} className={pic.className}/>)}
            </figure> 
        </div>
    )
}

export default Picture;