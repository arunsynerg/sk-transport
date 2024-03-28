import './Contact.css'
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import the CSS
import {Link} from 'react-scroll'
import { FaInstagram } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa6";
export default function Contact(){

    return(
        <div className='contact'>
            <div className="contact_touch">
                <h1>Get in Touch</h1>
            </div>
            <div className='contact_enq'>
                <h1>ALL INQUIRIES</h1>
                <p>We’re happy to answer any questions you might have.</p>
                {/* <p>Be it on our facilities, our staff, or our relentless commitment to a healthier tomorrow. We’re ready and available.</p> */}
            </div>
            <div className='contact_via'> 
                <div>
                     
                   {/* <h3>Call Us</h3> */}
                    <button className="primary-button"><a href="tel:9843346747">Call Us</a></button>
                </div>
                <div>
                    
                    {/* <h3>E-Mail Us</h3> */}
                    <button className="primary-button"><a href="mailto:arun@gmail.com">Mail Us</a></button>
                </div>
            </div>
            <div className='contact_access'>
                <div className='contact_Quick'>
                    <h4>Quick Access</h4>
                <p><Link to="home" smooth={true} duration={900} offset={-960}>Home</Link></p>
                <p><Link to='about' smooth={true} duration={900} offset={-55}>About</Link></p>
                <p><Link to='product' smooth={true} duration={900} offset={-50}>Products</Link></p>
                <p><Link to='service' smooth={true} duration={900} offset={-55}>Services</Link></p>
                <p><Link to='contact' smooth={true} duration={900} offset={-50}>Contact</Link></p>
                </div>
                <div className='contact_add'>
                    <h4>Contact & Address</h4>
                    <p>No-1, Highways Colony, Pudukottai Main Road, Trichy 620020, India</p>
                    <p>+91 9843346747</p>
                    <p>info@gmail.com</p>
                    <div className='contact_links'>
                        <a href="https://www.facebook.com/" target='_blank'><FaFacebook className='facebook'/></a>
                        <a href="youtube.com" target='_blank'><TbBrandYoutubeFilled className='youtube'/></a>
                        <a href="instagram.com" target='_blank'><FaInstagram className='instagram'/></a>
                        {/* <a href="lingedin.com" target='_blank'>li</a> */}
                    </div>
                </div>
            </div>
            <div className='mapview'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501624.7099325844!2d78.36006773389575!3d10.815670587868912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ff2aecdad%3A0x6de02c3bedbbaea6!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1704276689127!5m2!1sen!2sin"  style={{border:'0', width:'950px', height:'450px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        </div>
    ) 
}