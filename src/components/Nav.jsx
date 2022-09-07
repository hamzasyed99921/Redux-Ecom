import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import {useSelector} from "react-redux";
import {Link } from 'react-router-dom';


const Nav = () => {
  const {totalQuantities} = useSelector(state => state.CartReducer)
  return (
    <>
        <div className="nav">
            <div className='main_container'>
                <div className="nav_container">
                <div className="nav_left">
                     <Link to='/'><img src="/images/logo.webp" alt="logo" /></Link>
                </div>
                <div className="nav_right"><Link to='cart'><Badge badgeContent={totalQuantities} color="error">
            <ShoppingCartIcon />
          </Badge></Link></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Nav