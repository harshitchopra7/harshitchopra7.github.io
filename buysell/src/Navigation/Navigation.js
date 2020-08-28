import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
   return(
       <div className='hello'>
            <nav className="dt w-100 border-box pa3 ph5-ns">
                <Link to='/' style={{ textDecoration: 'none'}}><p style={{ color: '#1c2841'}} className=".bodoni i fw8 f1 dtc v-mid mid-gray link dim w-25 pointer">BuySell</p></Link>
                <div className="f3 dtc v-mid w-75 tr pointer width">
                    <Link to='/about'><p className="link dim dark-gray dib mr3 mr4-ns">About Us</p></Link>
                    <Link to='/signin'><p className="link dim dark-gray dib mr3 mr4-ns">SignIn/SignUp</p></Link>
                    <Link to='/contact'><p className="link dim dark-gray dib">Contact Us</p></Link>
                </div>
            </nav>
        </div>
    );
}
export default Navigation;