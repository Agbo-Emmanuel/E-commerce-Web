// import React, {useState, useEffect} from 'react'



// const Categories = () => {

//   const [jewelrycategory, setJewelrycategory] = useState([])


//     useEffect(()=>{
//           fetch('https://fakestoreapi.com/products/category/jewelery')
//           .then(res=>res.json())
//           .then(json=>setJewelrycategory(json))
//     }, [])

//   return (

//     <>
    
//         <div className='productdisplay'>

            
//             {
//               jewelrycategory.map((jcategory)=>{

//                   return (

//                       <div key={jcategory.id} className='categoryproduct'>
//                           <img src={jcategory.image} alt=''/>
//                           <h2>{jcategory.title}</h2>
//                           <p>{jcategory.price}</p>
//                       </div>
//                   )

//               })
//             }
                
//             </div>
        



//             <div className="Category">

// <div className='categorycontainer'>

//     <div className="thecategory">
//         All
//      </div>
//     <div className="thecategory">
//         electronics
//      </div>
//     <div  className="thecategory">
//         jewelery
//      </div>
//     <div className="thecategory">
//         men's clothing
//      </div>
//     <div className="thecategory">
//         women's clothing
//      </div>

// </div>


// {/* <Categories/> */}


// <div className='productdisplay'>

//     {
//         products.map((product)=>{

//             return (

//                 <div key={product.id} className='categoryproduct'>
//                     <img src={product.image} alt=''/>
//                     <h2>{product.title}</h2>
//                     <p>{product.price}</p>
//                 </div>
//             )

//         })
//     }

// </div>


// </div>

    
//     </>
//   )
// }

// export default Categories
