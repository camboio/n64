import React from 'react';
import $ from 'jquery';

export default class Splash extends React.Component {
   render(){
      return(
         <div className="splash-container" ref="splash">
            <div className="splash-title">
               Bold.
            </div>
            <div className="splash-content">
               Here's some other text as well
            </div>
            <div className="splash-scrolldown" onClick={(e) =>{
               $('html, body').animate({
                  scrollTop: $(this.refs.splash).outerHeight() - 50
               }, 400);
            }}>
               <i className="fa fa-angle-down"></i>
            </div>
         </div>
      );
   }
}
