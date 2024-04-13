import * as THREE from '../../../node_modules/three/build/three.module.js';
import { RectAreaLightUniformsLib } from '../../../node_modules/three/examples/jsm/lights/RectAreaLightUniformsLib.js'

RectAreaLightUniformsLib.init();

function createHemisphereLights() {

	const color = 0xffffff;
	const groundColor = 0xffffff;
	const intensity = 0.1;

	const light = new THREE.HemisphereLight( color, groundColor, intensity );

	return light;
}

function createSpotLights() {

	const color = 0xffffff;
	const intensity = 10000;

	const light = new THREE.SpotLight( color, intensity );
	light.castShadow = true;
	light.shadow.mapSize.set(1024, 1024);
	light.position.set(0, 0, 50);

	return light;
}

function rotateSpotLight(spotLight, ball) {	
	setInterval(function () {
		var ballPosition = ball.mesh.position.clone();

		spotLight.target.position.copy(ballPosition);
		spotLight.target.updateMatrixWorld();

		var offset = new THREE.Vector3(1, 1, 50);
		var spotLightPosition = ballPosition.clone().add(offset);
		var angle = Math.atan2(ballPosition.y, ballPosition.x);

		spotLight.rotation.z = angle;
		spotLight.position.copy(spotLightPosition);
	}, 32);
}

function createAmbientLights() {

	const color = 0xffffff;
	const intensity = 0.2;

	const ambientLight = new THREE.AmbientLight( color, intensity );

	return ambientLight;
}

/* ************************************************ */
/* 													*/
/*		RectAreaLight -> MeshStandardMaterial <-	*/
/* 													*/
/* ************************************************ */

function createRectLight() {
	
	const color = 0xff0000;
	const intensity = 10;

	const width = 12;
	const height = 4;
	const light = new THREE.RectAreaLight( color, intensity, width, height );
	light.position.set( 0, 10, 0 );
	light.rotation.x = THREE.MathUtils.degToRad( - 90 );
	// light.castShadow = true;
	
	return light;
}

export { createAmbientLights, createRectLight, createHemisphereLights, createSpotLights, rotateSpotLight };

/*
var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.intensity = 200;
spotLight.position.set( 0, 10, 5 );

spotLight.castShadow = true;
spotLight.shadow.mapSize.set(512, 512);

spotLight.shadow.camera.near = 5;
spotLight.shadow.camera.far = 20;
spotLight.shadow.camera.fov = 60;

var spotLightX = 0, spotLightZ = 0, spotLightTheta = 0;
setInterval(function() {
	spotLightTheta += 0.01;
	spotLightX = 5 * Math.cos(spotLightTheta),
	spotLightZ = 5 * Math.sin(spotLightTheta),
	spotLight.position.set(spotLightX, 10, spotLightZ);
}, 16);

*/

/*

function createDirectionalLights() {
	
	const color = 0xffffff;
	const intensity = 10;

	const light = new THREE.DirectionalLight( color, intensity );
	light.position.set( 10, 8, 10 );
	light.position.multiplyScalar( 8 );

	light.castShadow = true;

	// const d = 1000;
	// light.shadow.camera.left = - d;
	// light.shadow.camera.right = d;
	// light.shadow.camera.top = d;
	// light.shadow.camera.bottom = - d;
	// light.shadow.bias = - 0.03;

	// light.shadow.camera.near = 2;
	// light.shadow.camera.far = 5000;
	// light.shadow.mapSize.set(1024, 1024);

	
	return light;
}
*/