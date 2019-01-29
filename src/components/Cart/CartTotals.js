import React from 'react'

export default function CartTotals({data}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = data;
    return (
        <React.Fragment>
         <div className="container">
         <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize 
         text-right">
         <button className="btn btn-outline-danger text-uppercase mb-3 px-5" onClick={()=> clearCart()}>
             Clear Cart
         </button>
         <h5>
             <span className="text-title">subtotal: </span> <strong>
                 ${cartSubTotal} </strong>
         </h5>
         <h5>
             <span className="text-title">tax: </span> <strong>
                 ${cartTax} </strong>
         </h5>
         <h5>
             <span className="text-title">total: </span> <strong>
                 ${cartTotal} </strong>
         </h5>
         </div>
      
        </div>

        </React.Fragment>
    
  )
}
