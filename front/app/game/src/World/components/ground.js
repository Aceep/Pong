import * as THREE from '../../../node_modules/three/build/three.module.js';

class Ground {
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
		this.depth = 1;

		this.boxGeometry = new THREE.BoxGeometry(this.width, this.height, this.depth);
		// this.boxMaterial = new THREE.MeshPhongMaterial({
		// 	color: this.color,
		// 	specular: 0x00ff00,
		// 	shininess: 20,
		// });

		this.boxMaterial = new THREE.MeshPhongMaterial({ color: 'black' });
		this.boxMaterial.transparent = true;
		this.boxMaterial.opacity = 0.9;


		this.mesh = new THREE.Mesh(this.boxGeometry, this.boxMaterial);
		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;
		console.log('ground pos:', this.mesh.position, 'height:', height, 'width:', width);
	}
}

export { Ground };

// function createGround() {

// 	var nCells = 4;
// 	var size = 8;

// 	var canvas = document.createElement( 'canvas' );
// 	canvas.width = nCells * size;
// 	canvas.height = nCells * size;

// 	var context = canvas.getContext( '2d' );

// 	var colors = [ 'white', 'black' ];

// 	for ( var i = 0; i < nCells; ++i ) {
// 		for ( var j = 0; j < nCells; ++j ) {
// 			var index = ( i + j ) % 2;
// 			context.fillStyle = colors[ index ];
// 			context.fillRect( i * size, j * size, size, size );
// 		}
// 	}

// 	var planeTexture = new THREE.CanvasTexture( canvas );
// 	planeTexture.wrapS = THREE.RepeatWrapping;
//     planeTexture.wrapT = THREE.RepeatWrapping;
// 	planeTexture.magFilter = THREE.NearestFilter;
// 	planeTexture.colorSpace = THREE.SRGBColorSpace;
// 	planeTexture.repeat.set(size / 2, size / 2);

// 	// var planeGeometry = new THREE.PlaneGeometry( size * nCells, size * nCells * 2, nCells, nCells);
// 	var planeGeometry = new THREE.PlaneGeometry( 400, 200, 1, 1);

// 	var planeMaterial = new THREE.MeshStandardMaterial( {
// 		map: planeTexture,
// 		side: THREE.DoubleSide } );

// 	// planeMaterial.fog = false;
	
// 	var planeMesh = new THREE.Mesh( planeGeometry, planeMaterial );
	
// 	planeMesh.position.set(0,0,0);
// 	// planeMesh.rotation.x = - Math.PI / 2;
	
// 	planeMesh.castShadow = false;	//cast shadows
// 	planeMesh.receiveShadow = true;	//receive shadows from light
// 	return planeMesh;
// }

// export { createGround };


