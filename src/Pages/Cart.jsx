import React from 'react';
import '../Components/Styles/Cart.css';

export const Cart = ({ cart, setCart, userAplication }) => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

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

                <input type="number" placeholder='Phone Number'  />

                <input type="number" placeholder='Adress'  />

                <input type="number" placeholder='Credit card'  />


                <div className="infoUserCart">

                    <input type="text" placeholder='Postal Code'  />
                    <input type="text" placeholder='Region'  />

                    
                

                </div>


                
                    



                </div>
                
                <p>Total: ${total.toFixed(2)}</p>

                <button>Proccess to Payment</button>
            </div>
        </div>
    );
};
