import React,{useState} from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';
function Navigation() {
    const [isClick,setIsClick]=useState(false);
    const [className,setClassName]=useState('closeHamburger');
    const [navClassName,setNavClassName]=useState("nav");
    const handleClick=()=>{
        setIsClick(!isClick);
        if(!isClick) {
          setClassName('openHamburger') 
           setNavClassName('openNav')  
        }else{
          setClassName('closeHamburger')
          setNavClassName('nav')//display none
        }
    }
  return (
    <>
    <div className='hamburger' onClick={handleClick}>
 <div className={className}></div>
 <div className={className}></div>
 <div className={className}></div>
 </div>
 <div className={navClassName}>
    <NavLink  onClick={handleClick} to='/' >Home</NavLink>
    <NavLink  onClick={handleClick} to='/Bollywood' style={({ isActive }) => ({ color: isActive ? 'grey' : 'black' })} >Bollywood</NavLink>
    <NavLink  onClick={handleClick} to='/Hollywood' style={({ isActive }) => ({ color: isActive ? 'grey' : 'black' })} >Hollywood</NavLink>
    <NavLink  onClick={handleClick} to='/Technology'style={({ isActive }) => ({ color: isActive ? 'grey' : 'black' })} >Technology</NavLink>
    <NavLink  onClick={handleClick} to='/Fitness'   style={({ isActive }) => ({ color: isActive ? 'grey' : 'black' })} >Fitness</NavLink>
    <NavLink  onClick={handleClick} to='/Food'      style={({ isActive }) => ({ color: isActive ? 'grey' : 'black' })} >Food</NavLink>
  </div>
 </>
  )
}
export default Navigation