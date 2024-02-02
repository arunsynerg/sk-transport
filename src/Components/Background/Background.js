import './Background.css'

import backgroundimg from '../../Assets/image1.jpg'
import backgroundimg2 from '../../Assets/image2.jpg'
import backgroundimg3 from '../../Assets/image3.jpg'

import video from '../../Assets/introvideo.mp4'

function Background({count, Setcount, playstatus, Setplaystatus}){
    const img = [ backgroundimg, backgroundimg2, backgroundimg3]
    
    const imgurl = img[count]
    
    if (playstatus){
        return(
         
                <div className="Backgroud-image">
               
                    <video type='video/mp4' autoPlay loop muted>
                        <source src={video} />
                    </video>
                </div>
               
        )
    }
    else{
        return(
            <div>
                <div className="Backgroud-image fade-in">
                    <img src={imgurl}/>
                   
                </div>
                               
            </div>
        )
    }
    
}
export default Background;