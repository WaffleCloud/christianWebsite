import { mainPic } from './data'

function Intro(){
    return(
    <section className='intro-container'>
      <div className="intro">
      <p style={{fontSize:'60px'}}>Christian Jimenez</p> 
      <p style={{fontSize: '40px'}}>Film Actor - Martial Artist - Voice Actor</p>
      <p style={{fontSize: '40px'}}>Venice, CA</p>
      </div> 
      <div className="main-img-container">
      <img src={mainPic.main} className="main-img" alt="main-img" />
      </div>
    </section>
    )
}

export default Intro;