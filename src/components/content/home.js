import React from 'react';
import Splash from './splash';
import HomeIntro from './home_intro';
import HomeContent from './home_content';

export default class Home extends React.Component {
   render(){
      return(
         <div className="content-container">
            <Splash />
            <div className="home-container">
               <HomeIntro />
               <HomeContent />
            </div>
         </div>
      );
   }
}
