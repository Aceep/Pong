import * as THREE from '../../../node_modules/three/build/three.module.js';

class Paddle {

	constructor (radius, length, depth, color) {
		this.radius = radius;
		this.length = length;
		this.depth = depth;
		this.radialSegments = 64 * 2;
		this.color = color;

		this.paddleGeometry = new THREE.CapsuleGeometry(this.radius, this.length, this.depth, this.radialSegments, this.radialSegments);
		this.paddleMaterial = new THREE.MeshPhongMaterial({ 
			color: this.color,
			specular: 0x000000,
			shininess: 10
		});
		this.paddleMaterial.emissive.set(color);
		this.paddleMaterial.emissiveIntensity = 1;

		this.mesh = new THREE.Mesh(this.paddleGeometry, this.paddleMaterial);

		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;
	}

	tick(delta) {
		// const sensibility = 0.1; // Ajuster la sensibilité selon votre préférence
		// this.mesh.position.y += delta * sensibility;
	}
}

export { Paddle };


