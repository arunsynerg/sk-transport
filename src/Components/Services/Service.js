import './Service.css'
import jcb1 from '../../Assets/jcb-rental.jpg'
import lorry from '../../Assets/lorry.jpg'
import tractor from '../../Assets/tractor.jpg'
import sand from '../../Assets/msand.jpg'
import psand from '../../Assets/psand.jpg'
import graval from '../../Assets/FillDirt.jpg'
import riversand from '../../Assets/riversand.jpg'
import { useEffect, useState } from 'react'
function Service({count, Setcount}){
    const scrollimg = [jcb1, lorry, tractor]
    // let[count, setCount] = useState(0);
    const rentalveh =scrollimg[count];
    // useEffect(()=>{
    //     setInterval(()=>{
    //         setCount(()=>{
                
    //                 if(count==2){
    //                     return count=0;
    //                 }
    //                 else{
    //                  return count=count+1;
    //                 }
                
    //         })
    //     },3000)
    // },[])
    const products = [
        {
            img: graval,
            title: 'Gravel Supply',
            desc:'Our high-quality gravel products are essential for various construction projects. Whether you`re working on roads, driveways, or landscaping, our gravel is sourced and processed to meet the highest standards, ensuring durability and performance.'
        },
        {
            img: sand,
            title:'M-Sand (Manufactured Sand)',
            desc:'As a sustainable alternative to river sand, M-Sand is gaining popularity in the construction industry. We offer premium M-Sand that is finely processed to meet construction specifications, providing excellent strength and consistency in concrete and mortar mixtures.'
        },
        {
            img: psand,
            title: 'P-Sand (Plastering Sand)',
            desc:' For smooth and uniform plastering finishes, our P-Sand is the ideal choice. Specially graded and washed to remove impurities, our plastering sand ensures excellent workability and adhesion, enhancing the quality of your plastering projects.'
        },
        {
            img: riversand,
            title: 'River Sand',
            desc:'Recognized for its superior quality and natural composition, river sand remains a preferred choice for various construction applications. We supply river sand that is meticulously screened and washed to deliver impeccable quality, making it suitable for concrete, masonry, and landscaping projects.'
        },
        {
            img: rentalveh,
            title: 'Rental Vehicles',
            desc:'In addition to our construction materials, we offer a diverse fleet of rental vehicles to meet your transportation needs. Whether you require compact cars for personal use, vans for group outings, or trucks for transporting heavy loads, our well-maintained vehicles are available at competitive rates, ensuring convenience and efficiency for your transportation requirements.'
        }
        
    ]

    return(
        <div className='service'>
            <h1 className='service_title'>Services</h1>
            <div className='product_card_container'>
            
            {products.map((product)=>{
              return(
                    <div className='product_card'>
            <img src={product.img} 
            className='product_card_img'/>
            
            <h3>{product.title}</h3>
            <hr></hr>
            <p>{product.desc}</p>
         </div>
                )
            })}
         
         
        </div>
        <div className='benefit_container'>
            <h2 className='whychoose'>Why Choose Us: </h2>
            <h4 className='benefit_title'>Quality Assurance:</h4>
            <p>We prioritize quality in every aspect of our products and services, ensuring that our customers receive reliable and superior materials and vehicles.</p>
            <h4 className='benefit_title'>Customer Satisfaction:</h4>
            <p>Your satisfaction is our top priority. We strive to exceed your expectations by providing personalized service, prompt deliveries, and dependable solutions tailored to your specific needs.</p>
            <h4 className='benefit_title'>Competitive Pricing:</h4>
            <p>We offer competitive pricing on our products and rental vehicles, allowing you to maximize value without compromising on quality.</p>
            <h4 className='benefit_title'>Reliability:</h4>
            <p>With a reputation for reliability and professionalism, we have built long-lasting relationships with our customers, who trust us for their ongoing construction and transportation requirements.</p>
            
        </div>
        </div>
    )
}
export default Service;
