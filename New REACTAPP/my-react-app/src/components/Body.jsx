
import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Thecontext } from '../App'


const url = 'https://fakestoreapi.com/products'

const Body = ()=>{

    const [products, setProducts] = useState([])
    const {dispatch, setAmount} = useContext(Thecontext)


    useEffect(()=>{
        axios.get(url)
            .then((res) => {
                setProducts(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    // useEffect(()=>{
    //                 fetch('https://fakestoreapi.com/products')
    //                 .then(res=>res.json())
    //                 .then(json=>setProducts(json))
    // }, [])
    
    const handleAdd = (product)=>{
        dispatch({type:"addToCart", payload:product})
        setAmount((old)=> old + 1 )
    }

    return(

        <>

            <div className='Hero'>
                <div className='Heroleft'>

                </div>
                <div className='Heroright'>
                    
                </div>
            </div>
        
        <div className='themain'>

            

                

{
    products.map((product)=>{

        return (

            <div className='Product'>
                <Link  to={`/detailpage/${product.id}`}  className='product'>
                    <img src={product.image} alt=''/>
                    <h2>{product.title}</h2>
                    <p>price: ${product.price}</p>
                </Link>
                <button onClick={()=> handleAdd(product)}>Add to cart</button>
            </div>
        )

    })
}

</div>

        </>
    )
}



export default Body