import React from 'react';

export default class HomeContent extends React.Component {
   render(){
      return(
         <div className="home-content-container">
            <div className="home-content-title">
               <div>Our Work</div>
            </div>
            <div className="home-content">
               <div className="home-content-row">
                  <a href="#"><div className="home-content-rect">
                     Example
                  </div></a>
                  <a href="#"><div className="home-content-rect">
                     Sample
                  </div></a>
                  <a href="#"><div className="home-content-rect">
                     Trample
                  </div></a>
               </div>
               <div className="home-content-row">
                  <a href="#"><div className="home-content-rect">
                     Rample
                  </div></a>
                  <a href="#"><div className="home-content-rect">
                     Blamble
                  </div></a>
                  <a href="#"><div className="home-content-rect">
                     Harambe
                  </div></a>
               </div>
               <div className="home-content-row">
                  <div className="home-content-square dolphins">
                     <div className="home-content-layer">
                        <h1>Dolphins</h1>
                        <p>They're cute, cuddly, and murderous</p>
                     </div>
                  </div>
                  <div className="home-content-square sandwich">
                     <div className="home-content-layer">
                        <h1>Sandwich</h1>
                        <p>Parliament sandwiches</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
