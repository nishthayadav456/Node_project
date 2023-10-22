import { useEffect ,useState} from "react"

import { NavLink } from "react-router-dom"
import Footer from "./Footer/Footer"

import Navigation from "./header/Navigation"

function Fitness(){
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("https://node-api-g7ph.onrender.com/api/fitness",{
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
<h1 className="bolyhead">Fitness <hr className="underhr"/></h1>
 {data.filter((item)=>item.id>=63 && item.id<69).map((item,index)=>{
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
         {data.filter((item)=>item.id>=69 && item.id<=73).map((item,index)=>{
            return(
               <div className="middle1"key={index}>
                <NavLink to={`/DynamicCompo/${item.id}`}>
                <div className="head1">{item.heading.slice(0,20)} <h1 className="counter">{index+1}</h1></div>
                <div >
               <img  id="bimage1"src ={item.image} alt="not found" />
               </div>
               </NavLink>
               {/* <hr className="linegrey"/> */}
               </div>
           )
       })} 
    <div className="advertisement">
    <img   id="firstimage" src="https://i.pinimg.com/564x/5e/b9/85/5eb985a019a9b5d957af3141fa43b0a5.jpg"alt="Not found"  />
        </div>
        </div>
        </div>
     
       <Footer/>
        </>
    )
}
export default Fitness




