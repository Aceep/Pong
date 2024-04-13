import * as THREE from '../../../node_modules/three/build/three.module.js';

function createRenderer() {
	const renderer = new THREE.WebGLRenderer( {
		antialias: true,
		logarithmicDepthBuffer: true,
		/*alpha: true,
	premultipliedAlpha: false*/ }
	);
	renderer.physicallyCorrectLights = true;
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	renderer.setSize( window.innerWidth / 2, window.innerHeight / 2);

	return renderer;
}

export { createRenderer };
