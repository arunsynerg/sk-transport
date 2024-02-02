import './Contact.css'
function Contact(){

    return(
        <div className="contact_container">
            <h1>GET IN TOUCH</h1>
            <div>
                <div>
                <p></p>
                <p>ADDRESS</p>
                <p>No-1, Highways Colony, Pudukottai Main Road, Trichy 620020, India</p>
                
                <button><a href="tel:+123465798" /></button>
                </div>
                <div>
                <p></p>
                <p>PHONE</p>
                <p>No-1, Highways Colony, Pudukottai Main Road, Trichy 620020, India</p>
                
                <button><a href="tel:+123465798" /></button>
                </div>
                <div>
                <h1>Address</h1>
                <button><a href="tel:+123465798" /></button>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d149166.55756958018!2d78.61441335031141!3d10.74983525338184!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ff2aecdad%3A0x6de02c3bedbbaea6!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1706002280540!5m2!1sen!2sin"  style={{border:'0', width:"950px", height:"450px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}
export default Contact;