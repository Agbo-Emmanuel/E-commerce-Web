// import React, {useState, useEffect} from 'react'
import React, {useState,useEffect}from 'react'
import "./pagestyle.css";
import { Link } from 'react-router-dom';
// import Categories from "./Categories"


const Category = ()=>{

//     const [products, setProducts] = useState([])

//     useEffect(()=>{
//         fetch('https://fakestoreapi.com/products')
//         .then(res=>res.json())
//         .then(json=>setProducts(json))
// }, [])

const [category, setCategory] = useState([])
const [products, setProducts] = useState([])
const [showcate, setShowcate] = useState(false)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategory(json))
    },[])

    const fetchProducts = (e)=>{

        fetch(`https://fakestoreapi.com/products/category/${e}`)
            .then(res=>res.json())
            .then(json=>setProducts(json))
            setShowcate(true)
    }



    return (

        <>
        
           <div className='Category'>

                <div className='categorycontainer'>
                    {
                        showcate === false ? category.map((e)=>(
                            <div  key={e} className='categoryproduct' onClick={()=>fetchProducts(e)}>
                                <p>{e}</p>
                            </div>
                        )): products.map((categoryprod)=>{
                            return(
                                <Link  to={`/detailpage/${categoryprod.id}`}  className='product'>
                                    <img src={categoryprod.image} alt=''/>
                                    <h2>{categoryprod.title}</h2>
                                    <p>price: ${categoryprod.price}</p>
                                </Link>
                            )
                        })

                       
                    }

                    {showcate && <button onClick={()=>setShowcate(false)}>back</button>}

                       
                </div>
           </div>
        </>

    )
}

export default Category