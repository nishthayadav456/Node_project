import { useEffect, useState } from "react"
import  axios  from "axios"
// import  {Store} from './ContextStore'
import { NavLink } from "react-router-dom"
import Footer from "./Footer/Footer"
import Navigation from "./header/Navigation"
function Bollywood(){
    const [data,setData]=useState([])
    useEffect(()=>{
       
       axios.get("https://node-api-g7ph.onrender.com/api/bollywood")
       .then((response)=>
       setData(response.data)
       )
        .catch((error)=> console.log(error))
       },[])
// const [ContextData]=useContext(Store)
// console.log(ContextData)

return(
 <>
<Navigation/>

<div className="Mainparent">
        <div className="right">
            <h1 className="bolyhead">Bollywood <hr className="underhr"/></h1>
           {data.filter((item)=>item.id>=1 && item.id<7).map((item,index)=>{
            return(
                <div className="middle"key={index}>
                <NavLink to={`/DynamicCompo/${item.id}`}>
                 <div className="head">{item.heading.slice(0,40)}</div>
                 <div className="image">
                 <img  id="bimage"src ={item.image} alt="not found" />
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
           {data.filter((item)=>item.id>=8 && item.id<=13).map((item,index)=>{
            return(
               <div  className="middle1"key={index}>
                <NavLink to={`/DynamicCompo/${item.id}`}>
                <div className="head1">{item.heading.slice(0,20)} <h1 className="counter">{index+1}</h1></div>
                <div>
               <img  id="bimage1"src ={item.image} alt="not found" />
               </div>
               </NavLink>
               {/* <hr className="linegrey"/> */}
               </div>
           )
        })}
<div className="advertisement">
    <div>
 <img  id="firstimage" src="https://1.bp.blogspot.com/-tdSc2ziLV0A/XjAXTV87hII/AAAAAAAAQI8/Vgv_3Rlyi5U4rxDHTQkTQjC62Wqhlz55gCLcBGAsYHQ/s1600/Bell-Bottom-movie-release-date-star-cast-poster.jpg" alt="Not found"  />
 </div>
    </div>

    </div>
    </div>
      
    <Footer/>
        </>
    )
}
export default Bollywood




