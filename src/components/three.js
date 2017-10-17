import React from 'react';

export default class Three extends React.Component {
   shouldComponentUpdate(){
      return false;
   }

   componentDidMount(){
      // this.map = new google.maps.Map(this.refs.map, {
      //    center: { lat: this.props.lat, lng: this.props.lng },
      //    zoom: 15,
      //    scrollwheel: false
      // });
      // this.marker = new google.maps.Marker({
      //    position: { lat: this.props.lat, lng: this.props.lng },
      //    map: this.map
      // });

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer({ alpha: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(this.renderer.domElement);


      this.loader = new THREE.ColladaLoader();
      this.loader.load('./inc/n64_2.dae', (collada) => {
         this.n64 = collada.scene;
         this.n64.scale.set(0.25, 0.25, 0.25);

         this.box = new THREE.Box3().setFromObject(this.n64);
         this.box.getCenter(this.n64.position);
         this.n64.position.multiplyScalar(-1);

         this.pivot = new THREE.Group();
         this.scene.add(this.pivot);
         this.pivot.add(this.n64);
         this.pivot.rotation.x += 11.3;
      });

      this.ambientLight = new THREE.AmbientLight(0xcccccc);
      this.scene.add(this.ambientLight);

      this.directionalLight = new THREE.DirectionalLight(0xffffff);
      this.directionalLight.position.set(0, 1, -1).normalize();
      this.scene.add(this.directionalLight);

      this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);

      // this.geometry = new THREE.BoxGeometry(1,1,1);
      // this.material = new THREE.MeshBasicMaterial({color: 0x00ff00});
      // this.cube = new THREE.Mesh(this.geometry, this.material);
      // this.scene.add(this.cube);

      this.camera.position.z = 5;

      this.animate();
   }

   animate(){
      requestAnimationFrame(this.animate.bind(this));
      if(this.pivot){
         // this.pivot.rotation.x += 0.1;
         this.pivot.rotation.z -= 0.01;
      }
      this.renderer.render(this.scene, this.camera);
   }

   render(){
      return (
         <div className="three"></div>
      );
   }
}
