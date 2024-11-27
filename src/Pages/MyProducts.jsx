import React, { useEffect, useState } from 'react'
import '../Components/Styles/MyProducts.css'
import { ProductAction } from '../Components/ProductAction'

export const MyProducts = ({userAplication}) => {

    const [productsUser, SetProductsUser] = useState(null)
    const [showProductAction, SetShowProductAction] = useState(false)
    const [product, setProduct] = useState(null)
    const [action, setAction] = useState(null)

    useEffect(() => {

        
        SetProductsUser(userAplication.articles)


    }, [])


    const handleAction = async (product, action) => {

      setProduct(product)
      setAction(action)
      SetShowProductAction(true)
    }


  return (
    <div className='MyProducts'>

        <h1>My products</h1>


        <div className="products ">
        {productsUser?.map((article) => (
          <div key={article.id} className='Product Myproduct'>
            <div className='Actions'>
            <span className='editProduct' onClick={() => handleAction(article, "editar")}>Editar</span>

            <span className='DeleteProduct' onClick={() => handleAction(article, "eliminar")}>Eliminar</span>

            </div>
            
            <div className="imgProduct">
              <img src={article.image} alt={article.name} />
            </div>
            <h3>{article.name}</h3>
            <p>$ {article.price}</p>
            
          </div>
        ))}
      </div>


        <a href="/UploadProduct">Subir Producto</a>


        {showProductAction && <ProductAction Product={product} Action={action} SetShowProductAction={SetShowProductAction}></ProductAction>}

    </div>
  )
}
