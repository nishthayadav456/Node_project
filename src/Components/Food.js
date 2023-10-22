import { useEffect,useState} from "react"
// import  {Store} from './ContextStore'
import { NavLink } from "react-router-dom"
import Footer from "./Footer/Footer"

import Navigation from "./header/Navigation"

function Food(){
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("https://node-api-g7ph.onrender.com/api/food",{
        method:"GET"
    })
    .then((response)=>response.json())
    .then ((data1)=> setData(data1) )
    .catch((error)=> console.log(error))
   },[])
// const [ContextData]=useContext(Store)
// console.log(ContextData)

    return(
        <>
       
        <Navigation/>
        
        <div className="Mainparent">
        <div className="right">
        <h1 className="bolyhead">Food <hr className="underhr"/></h1>
        {data.filter((item)=>item.id>=30 && item.id<36).map((item,index)=>{
           return(
             <div className="middle"key={index}>
            <NavLink to={`/DynamicCompo/${item.id}`}>
            <div className="head">{item.heading.slice(0,40)}</div>
             <div className="image">
            <img id="bimage" src ={item.image} alt="not found" />
             </div>
             <div className="description"> {item.Description.slice(0,150)}...</div>
                 </NavLink>
                 <br/>
             {/* <hr className="line"/> */}
            </div>
            )
        })}
        </div>
       
        <div className="left">
        <h1 className="bolyhead2">Top Post <hr className="underhr"/></h1>
           {data.filter((item)=>item.id>=36 && item.id<=40).map((item,index)=>{
           return(
               <div  className="middle1"key={index}>
               <NavLink to={`/DynamicCompo/${item.id}`}>
                <div className="head1">{item.heading.slice(0,20)} <h1 className="counter">{index+1}</h1></div>
                <div>
               <img  id="bimage1" src ={item.image} alt="not found" />
               </div>
               </NavLink>
               {/* <hr className="linegrey"/> */}
               </div>
           )
       })} 
         <div className="advertisement">
         {/* Advertisement */}
         <img   id="firstimage" src="https://img.pikbest.com/01/84/78/43ZpIkbEsTKWT.jpg!f305cw" alt="Not found"/>
        </div>
        </div>
         </div>
        
        <Footer/>
        </>
    )
}
export default Food




