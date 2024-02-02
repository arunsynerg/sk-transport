import { useState } from 'react';
import {Link} from 'react-scroll'
import './Nav.css'
import logo from '../../Assets/sk_logo.png'
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
function Navbar(){

    const [navlist, Setnavlist] = useState(false);

    function handlelist(){
        Setnavlist(!navlist)
    }
    return(
        <>
        <div className="navcontainer">
            <div className='logo_container'><img src={logo}/><h3>Transport</h3></div>
            <ul className='navlists'>
               <Link to="home" smooth={true} duration={900} offset={-960}> <li>Home</li></Link>
                <Link to='about' smooth={true} duration={900} offset={-55}><li>About</li></Link>
                <Link to='product' smooth={true} duration={900} offset={-50}><li>Products</li></Link>
                <Link to='service' smooth={true} duration={900} offset={-55}><li>Services</li></Link>
                <Link to='contact' smooth={true} duration={900} offset={-50}><li>Contact</li></Link>
            </ul>
            <FaBars className='navexpand-btn' onClick={()=>{Setnavlist(!navlist)}} style={{display : navlist ? 'none' : ''}}/>
            <IoCloseSharp id='navclosebtn' className='navexpand-btn' onClick={handlelist} style={{display: navlist ? 'block' : 'none'}}/>
        </div>
        <div className="navcontainer_mobileview" style={{display: navlist ? 'block' : 'none'}}>
            
            <ul className='navlists_mobileview'>
            <Link to="home" smooth={true} duration={900} offset={-960}> <li onClick={handlelist} style={{display: navlist ? 'block' : 'none'}}>Home</li></Link>
            <Link to='about' smooth={true} duration={900} offset={-55}><li onClick={handlelist} style={{display: navlist ? 'block' : 'none'}}>About</li></Link>
            <Link to='product' smooth={true} duration={900} offset={-50}><li onClick={handlelist} style={{display: navlist ? 'block' : 'none'}}>Products</li></Link>
            <Link to='service' smooth={true} duration={900} offset={-55}><li onClick={handlelist} style={{display: navlist ? 'block' : 'none'}}>Services</li></Link>
            <Link to='contact' smooth={true} duration={900} offset={-50}><li onClick={handlelist} style={{display: navlist ? 'block' : 'none'}}>Contact</li></Link>
            </ul>
        
        </div>
        </>
    )
}
export default Navbar;