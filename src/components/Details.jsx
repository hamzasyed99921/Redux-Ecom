import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import  Currency from 'currency-formatter';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Details = () => {
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.ProductsReducer)
    // console.log(product);
    const decQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    useEffect(() => {
        dispatch({type: 'PRODUCT', id})
    }, [id])
  return (
    <>
        <div className="container mt-100">
            <div className="row">
                <div className="col-6">
                   <div className="details_image">
                   <img src={`/images/${product.image}`} alt="" />
                   </div>
                </div>
                <div className="col-6">
                    <div className="details_name">
                        {product.name}
                    </div>
                    <div className="details_price">
                        <span className="details_actual">{Currency.format(product.price, { code: 'USD' })}</span>
                        <span className="details_discount">{Currency.format(product.discountPrice, { code: 'USD' })}</span>
                    </div>
                    <div className="details_info">
                        <span className="dec" onClick={decQuantity}><RemoveIcon/></span>
                        <span className="qty">{quantity}</span>
                        <span className="inc" onClick={() => setQuantity(quantity + 1)}><AddIcon/></span>
                        <button className='btn_cart' onClick={() => dispatch({type: 'ADD_TO_CART', payload: {product , quantity}})}>add to cart</button>
                    </div>
                    <div className="details_desc">
                        <h4>Details</h4>
                        {product.desc}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Details