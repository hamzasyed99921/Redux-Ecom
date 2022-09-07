import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux/es/exports'
import  Currency from 'currency-formatter'
import { Link } from 'react-router-dom'

const Home = () => {
    const {products} = useSelector(state => state.ProductsReducer)
    // console.log(products);
  return (
    <div>
        <Header/>
        <div className="main_container">
            <div className="row">
                {products.map(product => (
                    <div className="col-3" key={product.id}>
                        <div className="product">
                            <div className="product_img">
                                <Link to={`/details/${product.id}`}><img src={`/images/${product.image}`} alt="" />
                                </Link>
                            </div>
                            <div className="product_name">
                                {product.name}
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="product_price">
                                        <span className='actual_price'> {Currency.format(product.price, { code: 'USD' })}</span>
                                         <span className='discount'>{product.discount}%</span>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="product_discount">
                                        {Currency.format(product.discountPrice, { code: 'USD' })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Home