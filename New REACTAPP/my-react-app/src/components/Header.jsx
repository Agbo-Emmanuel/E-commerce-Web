import React, { useContext } from 'react'
import logo1 from "./img/logo1.webp"
import { NavLink } from 'react-router-dom'
import { Thecontext } from '../App'

const Header = () => {

    const {mode, setMode,  amount} = useContext(Thecontext)


  return (
    
    <>
    
        <div className={mode ? "headerdark" : "Header"}>

            <div className='header'>
                <div className='logo'>
                    <img src={logo1} alt="" />
                </div>
                <div className='headright'>
                    <div className='headtext'>
                        <NavLink to= "/" className={({ isActive}) =>
                            isActive ? "active" : "notactive"
                        }>Home</NavLink>

                        <NavLink to = "/category"  className={({ isActive}) =>
                            isActive ? "active" : "notactive"
                        }>Categories</NavLink>
                        
                        <NavLink to = "/cart"  className={({ isActive}) =>
                            isActive ? "active" : "notactive"
                        }>Cart ({amount})</NavLink>
                    </div>
                    {/* <button>
                        <button className='littlebtn'></button>
                    </button> */}
                    <label onClick={()=>setMode(true)}>
                        <input type="checkbox"/>
                        <div className="circle"></div>
                    </label>
                </div>
            </div>

        </div>
    
    </>
  )
}

export default Header
