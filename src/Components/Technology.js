import { useEffect,useState} from "react"

import { NavLink } from "react-router-dom"
import Footer from "./Footer/Footer"
import Navigation from "./header/Navigation"

function Technology(){
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("https://node-api-g7ph.onrender.com/api/Technology" ,{
            method:"GET"
        })
        .then((response)=>response.json())
        .then ((data1)=> setData(data1) )
        
    
        .catch((error)=> console.log(error))
       },[])
// const [ContextData]=useContext(Store)
//  console.log(ContextData)

         return(
        <>
        <Navigation/>
       
       
        <div className="Mainparent">
        <div className="right">
        <h1 className="bolyhead">Technology <hr className="underhr"/></h1>
         {data.filter((item)=>item.id>=44 && item.id<50).map((item,index)=>{
            return(
                <div className="middle"key={index}>
                <NavLink to={`/DynamicCompo/${item.id}`}>
                 <div className="head">{item.heading.slice(0,40)}</div>
                 <div className="image">
                <img  id="bimage" src ={item.image} alt="not found"  />
                </div>
                 <div className="description"> {item.Description.slice(0,130)}...</div>
                 </NavLink>
                 <br/>
                 {/* <hr className="line"/> */}
                </div>
            )
        })}
        </div>
       
         <div className="left">
         <h1 className="bolyhead2">Top Post <hr className="underhr"/></h1>
            {data.filter((item)=>item.id>=51 && item.id<=55).map((item,index)=>{   
               return(
                <div  className="middle1"key={index}>
                <NavLink to={`/DynamicCompo/${item.id}`}>
                <div className="head1">{item.heading.slice(0,20)} <h1 className="counter">{index+1}</h1></div>
                <div>
               <img id="bimage1" src ={item.image} alt="not found"/>
               </div>
               </NavLink>
               {/* <hr className="linegrey"/> */}
               </div>
           )
       })} 
        <div className="advertisement">
         <img  id="firstimage"src="https://i.pinimg.com/236x/d6/77/12/d67712653d2ae37b458a9edf1d886680--vintage-pins-vintage-stuff.jpg" alt="Not found"/>
        </div>
        </div>
        </div>
       
       <Footer/>
        </>
    )
}
export default Technology




