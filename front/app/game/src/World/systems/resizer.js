
const setSize = (container, camera, renderer) => {

	camera.aspect = container.clientWidth / container.clientHeight;
	renderer.setSize( container.clientWidth, container.clientHeight );
	console.log('render size: width:', container.clientWidth, 'height:', container.clientHeight)
	console.log('render aspect:', camera.aspect)
	camera.updateProjectionMatrix();
	renderer.setPixelRatio( window.devicePixelRatio );
}

class Resizer {
	constructor(container, camera, renderer) {
		setSize(container, camera, renderer);

		window.addEventListener('resize', () => {
			setSize(container, camera, renderer);
			this.oneResize();
		});
	}
	oneResize() {}
}

export { Resizer };
