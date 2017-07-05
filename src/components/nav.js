import React from 'react';

export default class Nav extends React.Component {
   constructor(props){
      super(props);

      this.state = { atTop: true }

      this.atTop = this.atTop.bind(this);
   }
   componentDidMount() {
      window.addEventListener('scroll', this.atTop)
   }

   componentWillUnmount() {
      window.removeEventListener('scroll', this.atTop)
   }

   atTop(e){
      const atTop = document.body.scrollTop < 25 ? true : false;
      this.setState({ atTop });
   }

   render(){
      return(
         <nav className={`nav-container ${this.state.atTop ? 'top' : ''}`}>
            <div className="nav-header">
               <div className="nav-brand">
                  <a href="#">Brand</a>
               </div>
            </div>
         </nav>
      );
   }
}
