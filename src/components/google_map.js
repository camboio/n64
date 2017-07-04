import React from 'react';

export default class GoogleMap extends React.Component {
   shouldComponentUpdate(){
      return false;
   }

   componentDidMount(){
      this.map = new google.maps.Map(this.refs.map, {
         center: { lat: this.props.lat, lng: this.props.lng },
         zoom: 15,
         scrollwheel: false
      });
      this.marker = new google.maps.Marker({
         position: { lat: this.props.lat, lng: this.props.lng },
         map: this.map
      });
   }

   render(){
      return (
         <div className="footer-google-map" id="footer-map" ref="map">I'm a google map</div>
      );
   }
}
