import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Store } from "./ContextStore"
import { NavLink } from "react-router-dom"

import './Style.css'
function DynamicCompo(){
    const id=useParams().id
    const [datacontext]=useContext(Store)
    // console.log(datacontext)
    console.log(typeof id)
    const nav=useNavigate()
    
    const dRouteData=datacontext[id].Category
    console.log(dRouteData)
    return(
        <>
      

       <div className="parentContainer">
       <div className="like-icons">
                <img  src="https://www.freeiconspng.com/thumbs/like-icon-png/black-like-icon-png-13.png" alt="Not found"  style={{width:"30px", height:"30px"}} /> 
                 Like </div>
                <div  className="share-icons">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV6F73IVEoRP9k2YgunZ64wyoueHakwAWDj1O9QZc&s" alt="Not found" style={{width:"30px", height:"25px"}}/> 
                 Share</div>
       {datacontext.filter((item)=>item.id===parseInt(id)).map((item,index)=>{
            return(
              
                <div className="container1" key={index}>
               <div id="heading">{item.heading}</div>
               
                 
             
               <div className="middlepart">
               <span className="middle-icon">
                <div className="datecon">
               <img src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-business-office-girl-avatar-icon-vector-download-png-image_5257568.jpg"alt="Not found" style={{width:"80px", height:"80px" ,borderRadius:"50%"}}/>
               <p className="name">Nishtha Yadav <span style={{opacity:0.5}}>20 sept 2023</span></p> 
               </div>
               {/* <p className="date">20 sept 2023</p> */}
               
               <span className="icons">
               <img src="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-best-facebook-logo-icons-gif-transparent-png-images-9.png"  alt="Not found" style={{width:"25px", height:"25px"}}/>
               <img src="https://w7.pngwing.com/pngs/515/1/png-transparent-twitter-logo-computer-icons-logo-twitter-icon-computer-wallpaper-monochrome-bird-thumbnail.png"  alt="Not found" style={{width:"25px", height:"25px"}}/>
               <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png" alt="Not found"  style={{width:"25px", height:"25px"}}/>
               <img src="data:image/png;base64,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" alt="Not found"  style={{width:"25px", height:"25px"}}/>
               </span></span>
               </div>
               <div >
               <img className="imagecenter" src={item.image} alt="not found"/>
               </div>
               <div className="content">{item.Description}</div>
               <span className="middle-icon1">
               <img src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-business-office-girl-avatar-icon-vector-download-png-image_5257568.jpg"alt="Not found" style={{width:"80px", height:"80px" ,borderRadius:"50%"}}/>
               <p className="name">Nishtha Yadav <span style={{opacity:0.5}}>20 sep 2023</span></p> 
              
               </span>
             
               <div className="btn3"> 
               <button  className="btn"onClick={()=>nav(-1)}>Back</button>
               </div>
              </div>
             
           )
         })}
         </div>
           <div className="Lower-heading"> More from the Shiren <hr className="Shiren-hr"/> </div>
            <div className="Lower-Item">
                {datacontext.filter((item)=>(item.Category===dRouteData) && (item.id%15 ===1 || item.id%16===2 || item.id%17===3)).map((item,index)=>{
                      return(
                      <div  className="Limage"key={index}>
                    <NavLink to={`/DynamicCompo/${item.id}`}>
                     <div >
                     <img  className="threeimage"src ={item.image} alt="not found"/>
                     </div>
                    <div className="title" >
                      {item.heading.slice(0,30) }
                      </div>
                    
                    <span className="middle-icon2">
               <img src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-business-office-girl-avatar-icon-vector-download-png-image_5257568.jpg"alt="Not found" style={{width:"80px", height:"80px" ,borderRadius:"50%"}}/>
               <p className="name">Nishtha Yadav <span style={{opacity:0.5}}>20 sep 2023</span></p> 
              
               </span>
               </NavLink>
                     </div>
           )
       })}
       </div>
       
     </>
    )
}
export default DynamicCompo 