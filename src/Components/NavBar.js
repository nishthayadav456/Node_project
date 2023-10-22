import Home from './Home'
import Bollywood from './Bollywood';
import Technology from './Technology';
import Hollywood from './Hollywood';
import Fitness from './Fitness';
import Food from './Food'
import DynamicCompo from './DynamicCompo';
import {Routes,Route} from 'react-router-dom'

function NavBar(){
    return(
        <div>
            {/* <div className='compo'>
   <Link to="/" className='home'>Home</Link><br/>
        <Link to="/Bollywood" className='bollywood'>Bollywood</Link><br/>
        <Link to="/Technology" className='tech'>Technology</Link><br/>
        <Link to="/Hollywood" className='hollywood'>Hollywood</Link><br/>
        <Link to="/Fitness" className='fit'>Fitness</Link><br/>
        <Link to="/Food" className='food'>Food</Link>
   </div>
   <hr id="hr"/> */}
  
   <br/>
         
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Bollywood" element={<Bollywood/>}/>
            <Route path="/Technology" element={<Technology/>}/>
            <Route path="/Hollywood" element={<Hollywood/>}/>
            <Route path="/Fitness" element={<Fitness/>}/>
            <Route path="/Food" element={<Food/>}/>
            <Route path="/DynamicCompo/:id" element={<DynamicCompo/>}/>
        </Routes>
     </div>
 )
}
export default NavBar