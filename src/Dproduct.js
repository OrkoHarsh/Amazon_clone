import React from 'react';
import "./Dproduct.css";
//import { useStateValue } from './StateProvider';

function dproduct({id,image,title1,p1,p2,p3,p4,about,infoo}) {
    //  const [{basket},dispatch]= useStateValue();
    //  const addToBasket =() => {
    //      dispatch({
    //          type: "ADD_TO_BASKET",
    //          item:{
    //              id:id,
    //              image:image,
    //              title1:title1,
    //              p1:p1,
    //              p2:p2,
    //              p3:p3,
    //              p4:p4,
    //              about:about,
    //              infoo:infoo
        
        
    //    }



     //   })
    //};
  
    return(
      
        < div className='grid-container'>
            
                <img className='img1' 
                
                src={image}
                alt=''
                />
            <div className='info'>
                <div className='details'>
                    <h2>{title1}</h2>

                <div className='price'>

                    <ul>
                    <li className='ll'>{p1}</li>
                    <li className='l'>{p2}</li>
                    <li className='disc'>{p3}</li>
                    <li className='lll'>{p4}</li>
                    </ul>

                </div>

                <div className='button'>
                    <button
                    className='btn'>ADD TO CART</button>
                
                </div>

                <strong>{about}</strong>
                <p>{infoo}</p>
                    
                </div>
            </div>    
              


            
        </div>    
        
  );
}


export default dproduct;




{/* <div className='row2'>
                <img className='img2'
                src='https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_UL320_.jpg' 
                alt=''/>



            </div>


            <div className='row3'>
                <img className='img3'
                src='https://m.media-amazon.com/images/I/61AXYevlGzL._AC_UL320_.jpg'
                alt=''/>
             </div>



            <div className='row3'>
                <img className='img4'
                src='    https://m.media-amazon.com/images/I/11yTJjIACqL._AC_UL320_.jpg '
                alt=''/>
                
                
                
</div> */}