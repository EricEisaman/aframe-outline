AFRAME.registerComponent('outline', {
  schema: {
    color: {default: 'red'}
  },
  
  init: function(){ 
    
    this.material = new THREE.MeshBasicMaterial( { color: this.data.color , side: THREE.BackSide } );
    this.mesh = new THREE.Mesh( this.el.components.geometry.geometry, this.material );
    this.mesh.scale.multiplyScalar(1.05);
    this.el.object3D.add( this.mesh );
    
  },
  
  setColor: function(color){
  
    this.material.color.set(color);
    this.material.needsUpdate = true;
    
  },
  
  
});
