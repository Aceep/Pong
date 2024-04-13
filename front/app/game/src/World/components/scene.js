import * as THREE from '../../../node_modules/three/build/three.module.js';
import { GLTFLoader } from '../../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';

function createScene() {
	const scene = new THREE.Scene();

	const color = 'black';

	// const near = 2;
	// const far = 50;
	// const opacity = 0.05;

	// scene.fog = new THREE.Fog(color, near, far);
	// scene.fog = new THREE.FogExp2(color, opacity);

	const texture = new THREE.TextureLoader().load( './ressources/texture_background.jpg' );
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set( 1, 1 );

	scene.background = texture;
	//scene.background = new THREE.Color( color );

	return scene;
}

export { createScene };
