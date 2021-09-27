import React from 'react'
import CartButton from './CartButton';

const Header = () => {
   
    return (
        <div className='main px-2 header'>
             <h1 style={{color:'white'}}>ReduxCart</h1>
      <nav className="navbar navbar-expand-sm ">
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
          
        </div>
    )
}

export default Header
