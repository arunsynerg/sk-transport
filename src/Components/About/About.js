import './About.css'
import about from '../../Assets/about.jpg'
import feature from '../../Assets/feature.jpg'
import { FaGlobe, FaShippingFast, FaHeadphones } from "react-icons/fa";
function About(){
    
    return(
        <div className='about'>
            <div className='about_container' id='about_container_top'>
                <img src={about} className='aboutimg'/>
                <div className='about_data'>
                    <h3 className='head_title'>ABOUT US</h3>
                    <h1 className='head_desc'>Quick Transport Services</h1>
                    <p>Welcome to SK Transport, your premier destination for all your construction material and rental vehicle needs. With a commitment to quality, reliability, and customer satisfaction, we have established ourselves as a trusted provider in the transportation industry.</p>
                    <div className='data_flex'>
                        <div className='data_items'>
                        <FaGlobe className='icon_size'/>
                        <h3>Global Coverage</h3>
                        <p>From building materials to rental vehicles, our comprehensive services span the globe, ensuring your construction and transportation needs are met wherever you are.</p>
                        </div>
                        <div className='data_items'>
                        <FaShippingFast className='icon_size'/>
                        <h3>On Time Delivery</h3>
                        <p>Delivering on time, every time – because we understand the value of your time and the importance of meeting deadlines.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
             <div className='about_container'>
                <div className='about_subdata'>
                    <h1 className='head_desc'>We Are Trusted Transport Company Since 1990 </h1>
                    <div className='data_flex_left'>
                        <FaGlobe className='icon_sizesub'/>
                        <div><h3>Worldwide Service</h3>
                        <p>From building materials to rental vehicles, trust us to deliver quality materials and transportation solutions to your doorstep, wherever you are in the world.</p>
                        </div>
                    </div>
                    <div className='data_flex_left'>
                    <FaShippingFast className='icon_sizesub'/>
                    <div> <h3>On Time Delivery</h3>
                        <p>Delivering excellence, punctuality, and reliability – because your project's success depends on it.</p></div>
                    </div>
                    <div className='data_flex_left'>
                    <FaHeadphones className='icon_sizesub'/>
                    <div> <h3>24/7 Telephone Support</h3>
                        <p>Round-the-clock assistance for all your construction material and rental vehicle needs, ensuring seamless support whenever you need it.</p></div>
                    </div>
                </div>
                <img src={feature} className='aboutimg' id='subimg'/>
             </div>
        </div>
    )
}
export default About;