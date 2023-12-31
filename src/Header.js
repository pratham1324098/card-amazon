import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import {auth} from './firebase'
function Header() {
    const [{basket,user},dispatch] = useStateValue();
    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }
  return (
    <div className="header">
        <Link to="/">
            <img  className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>
        <div className="header_search">
            <input className="header_searchInput" type="text" placeholder="Search Amazon.in" />
            <SearchIcon className="header_searchIcon"/>
        </div>
        <div className="header_nav">
            <Link to='/login'>
                <div onClick={handleAuthentication}
                className="header_option">
                    <span classNane="header_optionLineOne">
                        Hello {!user? 'Guest':user.email}
                    </span>
                    <span className="header_optionLineTwo">{
                        user? 'Sign Out':'Sign In'
                    }
                    </span>
                </div>
            </Link>
            <Link>
                <div className="header_option">
                    <span classNane="header_optionLineOne">
                        Returns
                    </span>
                    <span className="header_optionLineTwo">
                        Orders
                    </span>
                </div>
            </Link>
            <Link to='./Prime'>
                <div className="header_option">
                    <span classNane="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>
            </Link>
            <Link to="/checkout">
            <div className="header_optionBasket">
                <ShoppingBasketIcon/>
                <span className="header_optionLineTwo header_basketCount">
                    {basket.length}
                </span>
            </div>
            </Link>
            
        </div>
    </div>
    
  )
}

export default Header
