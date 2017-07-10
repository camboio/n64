import React from 'react';

export default class HomeIntro extends React.Component{
   render(){
      return (
         <div className="home-intro-container">
            <div className="home-intro-headline">
               <h1>We are Melbourne's biggest and best web development agency,
               take our word for it. Please.</h1>
            </div>
            <div className="home-intro-content">
               We're not begging you to buy our content, but we're highly suggesting it
            </div>
         </div>
      );
   }
}
