import {useState,useEffect} from 'react'
import './Style.css';

import MainPage from './MainPage';
import { NavLink } from 'react-router-dom';
import Footer from './Footer/Footer';

import Navigation from './header/Navigation';

function Home(){
   
       
    return(
        <>
      <Navigation/>
       
       
        <MainPage/>
        <Latest/>
        <TopStories/>
        </>
    )
  
}
export default Home
function Latest(){
    const [data,setData]=useState([])
    useEffect(()=>{

        fetch("https://node-api-g7ph.onrender.com" ,{
            method:"GET"
        })
        .then((response)=>response.json())
        .then ((data1)=> setData(data1) )
        .catch((error)=> console.log(error))
       },[])
    // const[ContextData]=useContext(Store);
    // console.log(ContextData)
    return(
        <>
       
       <h1 className='thelatest'>The Latest <hr className='underhr'/></h1>
        <div className='homelatest'>
           
        {data.filter((item)=>item.id%20===0 ).map((item,index)=>{
            console.log(item)
            return(
                 <>
                 <div key={index}>
                 <NavLink to={`/DynamicCompo/${item.id}`}>
                   
                 <img id="Latestimage" src ={item.image} alt="not found" />
                 <h3 className='heading' >{item.heading.slice(0,30)} </h3>
                     <div className='para1'>
                    <p> {item.Description.slice(0,200) }...</p>
                 </div>
                 </NavLink>
                   </div>
                  </>
            )
        })}
        </div>
         </>
    )
}
function TopStories(){
    const [data,setData]=useState([])
    useEffect(()=>{

        fetch("https://node-api-g7ph.onrender.com" ,{
            method:"GET"
        })
        .then((response)=>response.json())
        .then ((data1)=> setData(data1) )
        .catch((error)=> console.log(error))
       },[])
    // const[ContextData]=useContext(Store);
    // console.log(ContextData)
    return(
        <>
       <div className='thirdbox'>
       <br/>
        <div className='Right'>
            <h1 className='topstory'>Top Stories<hr className='underhr'/></h1>
        {data.filter((item)=>item.id%11===0 ).map((item,index)=>{
            console.log(item)
            return(
                <div className='middle5' key={index}>
                 <NavLink to={`/DynamicCompo/${item.id}`}>
                <div >
                 <img id="topstoryimage"src ={item.image} alt="not found" />
                 </div>
                  <div className='heading2'>{item.heading.slice(0,45)} </div>
                   <p className='para2'> {item.Description.slice(0,100)}...</p>
                     {/* <hr className="line"/> */}
                     </NavLink>
                    </div>
                    
            )
        })}
        </div>

      
         <div className="Left">
         <h1 className='toppost'>Top Post<hr className='underhr'/></h1>
           {data.filter((item)=>item.id%12===0).map((item,index)=>{
            return(
                <div className="mid"key={index}>
                   <NavLink to={`/DynamicCompo/${item.id}`}>
                <div className="head4">{item.heading.slice(0,40)} <h1 className="counter">{index+1}</h1></div>
                <div>
               <img id="topostimage"src ={item.image} alt="not found"  />
               </div>
               </NavLink>
               {/* <hr className="linegrey"/> */}
               </div>
           )
       })}
       <div className="advertise">
      <img  id="secondimage" src="https://www.themediaant.com/blog/wp-content/uploads/2022/07/Outdoor-Advertising.jpg" alt="Not found"/>
        </div>
        </div>
        </div>
        <Footer/>
         </>
    )
}





