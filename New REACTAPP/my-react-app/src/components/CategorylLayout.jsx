import {Outlet} from "react-router-dom"


const Layout = ()=>{

    return (

        <>

            <div className='Ecommerce'>
            
                <Outlet/>
             </div>
        
        </>
    )
}


export default Layout