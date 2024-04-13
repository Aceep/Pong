import { World } from './World/world.js';

console.clear();

function main() {
	const container = document.querySelector( '#game_container' );


	if ( !container ) {
		console.error( 'No container found' );
		return;
	}

	const world = new World(container);
	world.start();
}

document.addEventListener('DOMContentLoaded', (event) => {
	main();
});
