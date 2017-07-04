import React from 'react';
import GoogleMap from './google_map';

export default class Footer extends React.Component {
   render(){
      return(
         <div className="footer-container">
            <GoogleMap lat={-37.8159964} lng={144.96703}/>
            <div className="footer-content">
               <div className="footer-links">
                  <div className="footer-col">
                     <strong className="footer-title">Our Services</strong>
                     <a href="#">Example text</a>
                     <a href="#">Example text</a>
                     <a href="#">Example text</a>
                     <a href="#">Example text</a>
                     <a href="#">Example text</a>
                  </div>
                  <div className="footer-col">
                     <strong className="footer-title">Who We Are</strong>
                     <a href="#">Example text</a>
                     <a href="#">Example text</a>
                     <a href="#">Example text</a>
                     <a href="#">Example text</a>
                     <a href="#">Example text</a>
                  </div>
                  <div className="footer-col">
                     <strong className="footer-title">Help & Support</strong>
                     <a href="#">Example text</a>
                     <a href="#">Example text</a>
                     <a href="#">Example text</a>
                     <a href="#">Example text</a>
                     <a href="#">Example text</a>
                  </div>
               </div>
               <div className="footer-socmed">
                  <div className="footer-address">
                     <strong>Brand Name</strong>
                     <p>
                        100 Flinders St
                        Melbourne, VIC 3000
                     </p>
                  </div>
                  <div className="footer-socmed-buttons"></div>
               </div>
            </div>
         </div>
      );
   }
}
