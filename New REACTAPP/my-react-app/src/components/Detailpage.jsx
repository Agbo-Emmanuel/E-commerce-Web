import React, {useEffect, useState, useContext} from 'react'
import {useParams} from "react-router-dom"
import { Thecontext } from '../App'

const Detailpage = () => {

    const {id} = useParams()

    const [detail, setDetail] = useState({})

    const {dispatch} = useContext(Thecontext)

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=>setDetail(json))
    },[id])
   

  return (

         <>
        
           <div className='Details'>
                
                <div className='Detailcard'>

                    <div className='detailimg'>
                        <img src={detail.image} alt="" />
                    </div>

                    <div className='detailtext'>
                        <p>{detail.description}</p>
                        <p>price: ${detail.price}</p>
                    </div>

                    <div className='Addtocart' onClick={()=> dispatch({type: "addToCart", payload: detail})}>
                        <p>Add to cart</p>
                    </div>
                    
                </div>
           </div>
        </>

  )
}



export default Detailpage
