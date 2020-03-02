import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../custom-button/CustomButton';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
);

export default CartDropdown;
