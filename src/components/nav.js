import React from 'react';

export default class Nav extends React.Component {
   render(){
      return(
         <nav className="nav-container">
            <div className="nav-header">
               <div className="nav-brand">
                  <a href="#">Brand</a>
               </div>
            </div>
         </nav>
      );
   }
}
