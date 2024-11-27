import React, { useState } from 'react';
import '../Components/Styles/Cart.css';
import productService from "../Services/Products.service"
import Swal from 'sweetalert2';


export const Cart = ({ cart, setCart, userAplication }) => {
    const [discountCode, setDiscountCode] = useState('');
    
    // Calcula el total inicial
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Aplica descuento si el código es "UADE10"
    const totalWithDiscount = discountCode === 'UADE10' ? total - 100 : total;

    const increaseQuantity = (itemName) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (itemName) => {
        setCart((prevCart) =>
            prevCart.reduce((acc, item) => {
                if (item.name === itemName) {
                    const newQuantity = item.quantity - 1;
                    if (newQuantity > 0) {
                        acc.push({ ...item, quantity: newQuantity });
                    }
                } else {
                    acc.push(item);
                }
                return acc;
            }, [])
        );
    };


    const handleCheckout = async () => {
        const checkoutData = {
            cartItems: cart.map((item) => ({
                productId: item.id, // Asegúrate de usar la propiedad que represente el ID del producto
                quantity: item.quantity,
                price: item.price,
            })),
            discountApplied: discountCode === 'UADE10' ? '10%' : '0%',
            total: totalWithDiscount.toFixed(2),
        };
    
        try {
            const response = await productService.postArticleCheckout(checkoutData);
            console.log("Checkout successful:", response.data);
            Swal.fire({
                title: 'Checkout Successful!',
                text: 'Your payment has been processed successfully.',
                icon: 'success',
                confirmButtonText: 'OK',
            });
        } catch (error) {
            console.error("Checkout failed:", error);
            alert("There was an issue with your checkout. Please try again.");
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
                    <input type="number" placeholder='Address' />
                    <input type="number" placeholder='Credit card' />
                    
                    <input 
                        type="text" 
                        placeholder='Discount code' 
                        value={discountCode} 
                        onChange={(e) => setDiscountCode(e.target.value)} 
                    />

                    <div className="infoUserCart">
                        <input type="text" placeholder='Postal Code' />
                        <input type="text" placeholder='Region' />
                    </div>
                </div>
                
                <p>Total: ${totalWithDiscount.toFixed(2) <= 0 ? " No aplicable" : totalWithDiscount.toFixed(2) }</p>

                <button onClick={handleCheckout}>Proceed to Payment</button>
            </div>
        </div>
    );
};
