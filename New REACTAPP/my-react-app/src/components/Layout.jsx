import {Outlet} from "react-router-dom"
import Header from "./Header"
import { useContext } from "react"
import { Thecontext } from "../App"



const Layout = ()=>{

   const {mode} =  useContext(Thecontext)

    return (

        <>

            <main style={mode ? {backgroundColor: "black"}: null}>
                <Header/>
                <Outlet/>
             </main>
        
        </>
    )
}


export default Layout