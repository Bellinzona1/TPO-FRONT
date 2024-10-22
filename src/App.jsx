import './App.css';
import { Rutas } from './Routes/Rutas';
import { Navbar } from './Components/Navbar';
import { useEffect, useState } from 'react';
import { CurrentUser } from './Services/Auth.service'; 

function App() {
  const [userAplication, setUserAplication] = useState(null);
  const [cart, setCart] = useState(() => {
    // Cargar el carrito desde localStorage al inicio
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    const handleUserAplication = async () => {
      try {
        const response = await CurrentUser();
        setUserAplication(response.data);
      } catch { /* empty */ }
    };
    handleUserAplication();
  }, []);

  // Este efecto se ejecuta cada vez que cambia el carrito
  useEffect(() => {
    console.log("Cart updated: ", cart); // Aquí puedes ver el carrito actualizado
    // Guardar el carrito en localStorage cada vez que cambia
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.name === product.name);
      if (existingProduct) {
        // Si el producto ya está en el carrito, incrementar la cantidad
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        // Si el producto no está en el carrito, agregarlo
        return [...prevCart, { ...product, quantity: 1 }]; // Asegúrate de establecer una cantidad inicial
      }
    });
  };

  return (
    <div>
      <Navbar userAplication={userAplication} />
      <Rutas userAplication={userAplication} addToCart={addToCart} cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
