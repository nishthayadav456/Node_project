import { useEffect, useState } from "react"

import { NavLink} from "react-router-dom"
import Footer from "./Footer/Footer"

import Navigation from "./header/Navigation"

function Hollywood(){
    const [data,setData]=useState([])
    useEffect(()=>{

        fetch("https://node-api-g7ph.onrender.com/api/hollywood" ,{
            method:"GET"
        })
        .then((response)=>response.json())
        .then ((data1)=> setData(data1) )
        .catch((error)=> console.log(error))
       },[])
// const [ContextData]=useContext(Store)
//  console.log(ContextData)
//  const nav=useNavigate()
        return(
        <>
        <Navigation/>
       
         
         <div className="Mainparent">
         <div className="right">
         <h1 className="bolyhead">Hollywood <hr className="underhr"/></h1>
           {data.filter((item)=>item.id>=15 && item.id<21).map((item,index)=>{
            return(
                 <div className="middle"key={index}>
                 <NavLink to={`/DynamicCompo/${item.id}`}>
                 <div className="head">{item.heading.slice(0,40)}</div>
                 <div className="image">
                <img id="bimage" src ={item.image} alt="not found" />
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
           {data.filter((item)=>item.id>=21 && item.id<=25).map((item,index)=>{
            return(
               <div  className="middle1"key={index}>
                <NavLink to={`/DynamicCompo/${item.id}`}>
                <div className="head1">{item.heading.slice(0,20)}.. <h1 className="counter">{index+1}</h1></div>
                <div >
               <img  id="bimage1" src ={item.image} alt="not found" />
               </div>
               </NavLink>
               {/* <hr className="linegrey"/> */}
               </div>
           )
       })} 

        <div className="advertisement">
            <div>
         <img id="firstimage" src="https://newspaperads.ads2publish.com/wp-content/uploads/2017/11/hollywood-opticians-sale-upto-70-off-ad-times-of-india-mumbai-19-11-2017.png"alt="Not found" />
         </div>
        </div>
        </div>
        </div>
        {/* <button className="btn1" onClick={()=>nav('/Technology')}>Back</button> */}
        <Footer/>
        </>
    )
}
export default Hollywood




