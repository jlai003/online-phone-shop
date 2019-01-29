import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
  render() {
    return (
     <section>
     <ProductConsumer>
     {data => {
        const {cart} = data;
        if (cart.length > 0) {
          return (<React.Fragment>
            <Title name="Your" title="Cart"></Title>
            <CartColumns/>
            <CartList data={data}/>
            <CartTotals data={data}/>
            
           </React.Fragment>);
       }else {
        return <EmptyCart/>
       }
     }}
     </ProductConsumer>
      
     </section>
    )
  }
}
