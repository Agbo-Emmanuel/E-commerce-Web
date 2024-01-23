import React, {useState, useEffect} from 'react'


const Electronics = () => {

  const [electronicscat, setElectronicscat] = useState([])


    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res=>res.json())
        .then(json=>setElectronicscat(json))
  }, [])


  return (

            <div className='productdisplay'>

                    
                    {
                        electronicscat.map((ecategory)=>{

                            return (

                                <div key={ecategory.id} className='categoryproduct'>
                                    <img src={ecategory.image} alt=''/>
                                    <h2>{ecategory.title}</h2>
                                    <p>{ecategory.price}</p>
                                </div>
                            )

                        })
                    }
                
            </div>

  )
}




export default Electronics
