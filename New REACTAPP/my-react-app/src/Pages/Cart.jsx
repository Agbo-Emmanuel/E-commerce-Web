
import { useContext } from "react"
import { Thecontext } from "../App"
import "./pagestyle.css"
// import img1 from "../components/img/logo1.webp"


const Cart = () =>{
    const {cart, dispatch} = useContext(Thecontext)
    // const {dispatch} = useContext(Thecontext)

    // const handleRemove = (id)=> {
    //     dispatch({type:"REMOVE", payload:id})
    // }

    return (
        
        <>
        
            <div className="Cart">

            <button onClick={()=> dispatch({type: "REMOVEALL", payload: cart})}>Clear all</button>


                <div className="cartcontainer">



                    {
                        cart?.map((e)=>(
                            <div key={e.id} className="cartproduct">
                                <div className="cartleft">
                                    <img src={e.image} alt="" />
                                </div>
                                <div className="cartright">
                                    <p>{e.description}</p>
                                    <p>price: ${(e.price * e.QTY).toFixed(2)}</p>
                                    <div className="qtyside">
                                        <p>QTY:</p>
                                        <div className="theqty">
                                            <button onClick={()=>dispatch({type: "DECREASE", payload: e.id})}>-</button>
                                            {e.QTY}
                                            <button onClick={()=>dispatch({type: "INCREASE", payload: e.id})}>+</button>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={()=> dispatch({type:"REMOVE", payload:e.id})}>remove</button>
                            </div>

                        ))
                    }


                </div>
            </div>
        
        </>

    )
}


export default Cart