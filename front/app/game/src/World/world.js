import { createScene } from './components/scene.js';
import { createCamera } from './components/camera.js';
import { createAmbientLights, createRectLight, createHemisphereLights, createSpotLights, rotateSpotLight } from './components/lights.js';

import { Ball } from './components/ball.js';
import { Paddle } from './components/paddle.js';
import { Ground } from './components/ground.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/resizer.js';
import { Loop } from './systems/Loop.js';

const fieldWidth = 400, fieldLength = 200;

class World {
	constructor(container) {

		this.scene = createScene();
		this.renderer = createRenderer();
		this.camera = createCamera(container);

		container.append(this.renderer.domElement);

		// LIGHTS
		this.ambientLight = createAmbientLights();
		this.spotLight1 = createSpotLights();
		this.spotLight2 = createSpotLights();
		this.spotLight3 = createSpotLights();
		this.spotLight4 = createSpotLights();
		this.spotLight0 = createSpotLights();

		this.spotLight1.position.set(- fieldWidth / 2, - fieldLength / 2, 100);
		this.spotLight2.position.set(- fieldWidth / 2, fieldLength / 2, 100);
		this.spotLight3.position.set( fieldWidth / 2, - fieldLength / 2, 100);
		this.spotLight4.position.set( fieldWidth / 2, fieldLength / 2, 100);
	
		
		// GAME OBJECTS
		this.ground = new Ground(fieldWidth, fieldLength, 'green');
		
		this.ball = new Ball(5, 'white');
		this.paddle1 = new Paddle(5, 50, 5, 'red');
		this.paddle2 = new Paddle(5, 50, 5, 'blue');
		
		this.paddle1.mesh.position.x = - fieldWidth / 2;
		this.paddle2.mesh.position.x = fieldWidth / 2;
		
		rotateSpotLight(this.spotLight0, this.ball);

		this.scene.add( this.camera );
		this.scene.add( this.ball.mesh );
		this.scene.add( this.ground.mesh );
		this.scene.add( this.paddle1.mesh , this.paddle2.mesh );
		this.scene.add( this.spotLight0 );
		this.scene.add( this.spotLight1 );
		this.scene.add( this.spotLight2 );
		this.scene.add( this.spotLight3 );
		this.scene.add( this.spotLight4 );
		this.scene.add( this.ambientLight );
		
		this.loop = new Loop(this.camera, this.scene, this.renderer, this.ball, this.paddle1, this.paddle2);
		this.loop.updatables.push(this.ball);
		this.loop.updatables.push(this.paddle1, this.paddle2);

		const resizer = new Resizer(container, this.camera, this.renderer);
		resizer.oneResize = () => {
			this.render();
		};
	}

	render() {
		this.renderer.render( this.scene, this.camera );
	}

	start() {
		this.loop.start();
	}

	stop() {
		this.loop.stop();
	}
}

export { World };

/*
import * as THREE from '../../node_modules/three/build/three.module.js';

		//add spheres
		const sphereRadius = 3;
		const sphereWidthDivisions = 32;
		const sphereHeightDivisions = 16;
		const sphereGeo = new THREE.SphereGeometry(sphereRadius, sphereWidthDivisions, sphereHeightDivisions);
		const numSpheres = 20;
		for (let i = 0; i < numSpheres; ++i) {
			const sphereMat = new THREE.MeshStandardMaterial();
			// if (i % 2 === 0) {
			// 	sphereMat.fog = false;
			// }
			sphereMat.color.setHSL(i * .73, 1, 0.5);
			const mesh = new THREE.Mesh(sphereGeo, sphereMat);
			mesh.position.set(-sphereRadius - 1, sphereRadius + 2, i * sphereRadius * -2.2);
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			scene.add(mesh);
		}
*/

/*
import Stats from '../../node_modules/three/examples/jsm/libs/stats.module.js';
		this.stats = new Stats();
		this.stats.domElement.style.position = 'absolute';
		this.stats.domElement.style.top = '0px';
		container.appendChild(this.stats.domElement);
*/

/*

		// // Helpers
		// const axesHelper = new THREE.AxesHelper(500); // x: red, y: green, z: blue
		// this.scene.add(axesHelper);
		// const directionalLightHelper = new THREE.DirectionalLightHelper(this.directionalLight, 5);
		// this.scene.add(directionalLightHelper);
		// const lightMarker = new THREE.Mesh(
		// 	new THREE.SphereGeometry(2, 32, 32),
		// 	new THREE.MeshBasicMaterial({ color: 0xffff00 })
		// );
		// lightMarker.position.copy(this.directionalLight.position);
		// this.scene.add(lightMarker);

		// const spotHelper = new THREE.SpotLightHelper(this.spotLight2);
		// const lightMarker = new THREE.Mesh(
		// 	new THREE.SphereGeometry(2, 32, 32),
		// 	new THREE.MeshBasicMaterial({ color: 0xffff00 })
		// );
		// lightMarker.position.copy(this.spotLight2.position);
		// this.scene.add(spotHelper);
		// this.scene.add(lightMarker);

		// this.spotLight0.target = this.ball.mesh;
*/