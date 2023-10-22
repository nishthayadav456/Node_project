import React from 'react'
import './Header.css'
import Navigation from './Navigation';
import Top from './Top';
const Navbar=()=>{
   return(
<div className='navbar'>
<Top/>
<Navigation/>
</div>
   );
}
export default Navbar;