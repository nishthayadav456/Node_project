import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="MainFooter">
      <div className="FooterWidth">

<div className="GridCont">

      <div className="SecCon">
      
      {/* <div className="middleContainer"> */}
        <div className="middleSubCon">
          <div className="FDescription">
           <p> An All in one blog, bringing you the best of entertainment, knowledge</p>
           <p> and inspiration.</p>
          </div>
          <div className="Copywrite">
            <span>©</span>2023.The Siren. All Rights reserved
          </div>
        </div>
      {/* </div> */}
      </div>
     
      <div className="contact">
        <h3>Contact</h3>
        <div>
          Address Sec-C2 Paradise (Uttarakhand).
        </div>
        <div>
          <span className="PhoneEmoji"><img src="https://e7.pngegg.com/pngimages/54/563/png-clipart-mobile-phones-telephone-call-logo-others-miscellaneous-text-thumbnail.png" height="15px" width="15px" alt="Not found"/>Call</span> +91 8171840783
        </div>
        <div className="lastFText">
          <pre><span className="MailEmoji">✉ </span>  nishthayadav1122@gmail.com</pre>
        </div>
      </div>

      <div className="Refernce">
        <h3 className="References">References</h3>
        <div> <Link   className="Flinks"to="/Bollywood">Bollywood</Link></div>
        <div> <Link  className="Flinks" to="/hollywood">Hollywood</Link></div>
        <div> <Link  className="Flinks" to="/Technology">Technology</Link></div>
        <div>  <Link   className="Flinks"to="/fitness">Fitness</Link></div>
        <div> <Link   className="Flinks"to="/food">Food</Link></div>
      </div>
     
      </div>
</div>
    </div>
  );
};

export default Footer;
