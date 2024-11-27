import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../Components/Styles/Cart.css';
import UserService from '../Services/User.service';

export const Cart = ({ userAplication }) => {
    const dispatch = useDispatch(); 
    const cart = useSelector(state => state.cart || []);
    const [discountCode, setDiscountCode] = useState('');
    const [discountApplied, setDiscountApplied] = useState(false);

    console.log(cart)

    const totalWithoutDiscount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);


    const total = discountCode === 'UADE10' && discountApplied
        ? totalWithoutDiscount - 100
        : totalWithoutDiscount;


    const increaseQuantity = (itemName) => {
        dispatch({
            type: 'UPDATE_CART',
            payload: {
                itemName,
                action: 'increase'
            }
        });
    };


    const decreaseQuantity = (itemName) => {
        dispatch({
            type: 'UPDATE_CART',
            payload: {
                itemName,
                action: 'decrease'
            }
        });
    };

    const handleDiscountChange = (e) => {
        setDiscountCode(e.target.value);
    };


    const applyDiscount = () => {
        if (discountCode === 'UADE10' && !discountApplied) {
            setDiscountApplied(true);
        } else if (discountCode !== 'UADE10') {
            alert('Invalid discount code');
        }
    };

    const handleCheckout = async () => {
        const checkoutData = {
            cartItems: cart.map(item => ({
                name: item.name,
                price: item.price,
                quantity: item.quantity,
            })),
            discountApplied: discountApplied ? '-100 applied' : '0 applied',
            total: total.toFixed(2),
        };

        try {
            const response = await UserService.postCheckout(checkoutData);
            console.log('Checkout successful:', response.data);
            alert('Checkout successful!'); 
        } catch (error) {
            console.error('Error during checkout:', error);
            alert('Checkout failed. Please try again.');
        }
    };

    return (
        <div className='Cart'>
            <div className="ShoppingCart">
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map((item) => (
                        <div key={item.name} className="cart-item">
                            <img src={item.img} alt={item.name} />
                            <div className="cartProductInfo">
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price}</p>
                            </div>
                            <div className="quantityCartProduct">
                                <p>Quantity: {item.quantity}</p>
                                <div className="quantityBtns">
                                    <button onClick={() => increaseQuantity(item.name)}>+</button>
                                    <button onClick={() => decreaseQuantity(item.name)}>-</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="userCartInfo">
                <div className="infoUserCart">
                    <input type="text" defaultValue={userAplication.firstname} />
                    <input type="text" defaultValue={userAplication.surname} />
                </div>

                <div className="demasinfo">
                    <input type="text" placeholder='Email' defaultValue={userAplication.email} />
                    <input type="number" placeholder='Phone Number' />
                    <input type="number" placeholder='Credit card' />
                    
                    <div className="infoUserCart">
                        <input type="text" placeholder='Postal Code' />
                        <input type="text" placeholder='Region' />
                    </div>

                    <input
                        type="text"
                        placeholder='Discount code'
                        value={discountCode}
                        onChange={handleDiscountChange}
                    />
                    <button onClick={applyDiscount}>Apply Discount</button>
                </div>

                <p className='totalPrice'>Total: ${total.toFixed(2)}</p>
                {discountApplied && <p className='DiscountAplied'>Descuento aplicado -100</p>}
                <button onClick={handleCheckout}>Process to Payment</button>
            </div>
        </div>
    );
};
