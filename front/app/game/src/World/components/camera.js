import * as THREE from '../../../node_modules/three/build/three.module.js';
import { OrbitControls } from '../../../node_modules/three/examples/jsm/controls/OrbitControls.js';

function createCamera(container) {
	const fov = 65;
	const aspect = container.clientWidth / container.clientHeight;
	const near = 0.1;
	const far = 1000;
	const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
	
	console.log('camera size: width:', container.clientWidth, 'height:', container.clientHeight)
	console.log('camera aspect:', aspect)

	camera.position.set( 0, -100, 200 );

	const controls = new OrbitControls(camera, container);
	controls.target.set( 0, 0, 0 );
	controls.enableDamping = true;
	controls.update();

	camera.lookAt( 0, 0, 0 );

	return camera;
}

export { createCamera };
