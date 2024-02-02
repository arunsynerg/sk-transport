import'./Product.css'
import msand from '../../Assets/msand.jpg'
import psand from '../../Assets/psand.jpg'
import graval from '../../Assets/FillDirt.jpg'
import bricks from '../../Assets/bricks.jpg'
import jalli from '../../Assets/jalli.jpg'
import riversand from '../../Assets/riversand.jpg'

function Products(){
    const productlist = [
      
        {
            img:psand,
            text:"PSAND"
        },
        {
            img:graval,
            text:"Graval"
        }
        ,
        {
            img:bricks,
            text:"Bricks"
        }
        ,
        {
            img:jalli,
            text:"Jalli"
        } ,
        {
            img:riversand,
            text:"R.Sand"
        }
    ]
    return(
        <div className='product'>
          <div className="product_title">
            <h1>Our Products</h1>
          </div>
          <div className='productlist_box'>
            {productlist.map((product)=>{
                   return( 
                    <div className='product_items'>
                        
                    <img src={product.img} />
                    <p className='productname_indicator'>{product.text}</p>
                    
                    </div>
                   )
                   })
                   }  
                    </div>               
        </div>
    )
}
export default Products;