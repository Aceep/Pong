import * as THREE from '../../../node_modules/three/build/three.module.js';

class Ball {
	constructor (radius, color) {
		this.radius = radius;
		this.segments = 64;
		this.sphereGeometry = new THREE.SphereGeometry( radius, this.segments, this.segments );

		const textureLoader = new THREE.TextureLoader();
		const ballTexture = textureLoader.load( 'ressources/golfball.jpg' );

		this.MeshStandardMaterial = new THREE.MeshPhongMaterial( {
			map: ballTexture,
			color: color,
			specular: 0xffffff,
			shininess: 50,
		});
		this.mesh = new THREE.Mesh( this.sphereGeometry, this.MeshStandardMaterial );
		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;
		this.ballSpeed = 100;
		this.ballAngle = Math.PI;
		this.mesh.position.set(0, 0, 0.5 + this.radius);
		console.log('ball pos:', this.mesh.position);
	}

	// ball updates
	tick(delta) {
		this.mesh.position.x += Math.cos(this.ballAngle) * this.ballSpeed * delta;
		this.mesh.position.y += Math.sin(this.ballAngle) * this.ballSpeed * delta;
	}
}

export { Ball };
