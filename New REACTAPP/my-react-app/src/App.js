import React, { useState, useReducer } from 'react'
import Ecommerce from "./components/Ecommerce"
import "./components/style.css"
import { createContext } from 'react'


const initialState = []

const reducer = (state, action)=>{
  switch(action.type){
    case "addToCart":{
      const check = state.findIndex((e)=>e.id === action.payload.id);
      if (check >= 0){
        state[check].QTY +=1
        return[...state]
      }else{
        return[...state,{...action.payload,QTY: 1}]
      }
      // if(state.length === 0){
      //   const QTY = 1
      //   return [...state, {...action.payload, QTY: QTY}]
      // }else{
      //   const check = state.findIndex((e)=> e.id === action.payload.id)
      //   if(check === -1){
      //     return [...state, {...action.payload, QTY: 1}]
      //   }else{
      //     state[check].QTY +=1
      //   }
      // }
      
    }
    case "REMOVE":{
      const newItem = state.filter((item)=> item.id !== action.payload)
      return state = newItem
    }

    case "REMOVEALL":{
      const newCart = state.filter((item)=> item === action.payload)
      return state = newCart
    }
    case "INCREASE":{
      const id = action.payload
      const index = state.findIndex((item)=> item.id === id)
      const itemQTY = state[index].QTY +=1
      console.log(itemQTY)
      return [...state]
    }
    case "DECREASE":{
      const id = action.payload
      const index = state.findIndex((item)=> item.id === id)
      const itemQTY = state[index].QTY -=1
      console.log(itemQTY)
      return [...state]
    }
    default : return state
  }
}

export const Thecontext = createContext()


const App = () => {

  const [mode, setMode] = useState(false)
  const [cart, dispatch] = useReducer(reducer, initialState)
  const [amount, setAmount] = useState(0)

  

  return (
    
    <>
    
      <Thecontext.Provider value={{mode, setMode, cart, dispatch, amount, setAmount}}>

        <div className='App'>
          <Ecommerce/>
        </div>

      </Thecontext.Provider>
    
    </>
  )
}

export default App
