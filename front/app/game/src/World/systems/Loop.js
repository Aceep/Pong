import * as THREE from '../../../node_modules/three/build/three.module.js';

const clock = new THREE.Clock();
const fieldWidth = 400, fieldLength = 200;
var Left_Score = 0, Right_Score = 0;
var ballSpeedy = 0;

class Loop {
	constructor(camera, scene, renderer, ball, paddle1, paddle2) {
		this.camera = camera;
		this.scene = scene;
		this.renderer = renderer;
		this.paddle1 = paddle1;
		this.paddle2 = paddle2;
		this.ball = ball;
		this.updatables = [ball];

		this.keyStates = {};

		window.addEventListener("keydown", this.handleKeyDown.bind(this));
		window.addEventListener("keyup", this.handleKeyUp.bind(this));
	}

	handleKeyDown(event) {
		this.keyStates[event.key] = true;
	}

	handleKeyUp(event) {
		this.keyStates[event.key] = false;
	}

	update(delta) {
		const paddleMovementSpeed = 100 * delta;
		const padLength = (this.paddle1.length + 2 * this.paddle1.radius);
	
		if (this.keyStates['d'] && this.paddle1.mesh.position.y < fieldLength / 2 - padLength / 2) {
			this.paddle1.mesh.position.y += paddleMovementSpeed;
		}

		if (this.keyStates['a'] && this.paddle1.mesh.position.y > -fieldLength / 2 + padLength / 2) {
			this.paddle1.mesh.position.y -= paddleMovementSpeed;
		}

		if (this.keyStates['s'] && this.paddle2.mesh.position.y > -fieldLength / 2 + padLength / 2) {
			this.paddle2.mesh.position.y -= paddleMovementSpeed;
		}

		if (this.keyStates['w'] && this.paddle2.mesh.position.y < fieldLength / 2 - padLength / 2) {
			this.paddle2.mesh.position.y += paddleMovementSpeed;
		}

		document.getElementById("Right_Player").textContent = Right_Score;
		document.getElementById("Left_Player").textContent = Left_Score;
	}

	start() {
		this.renderer.setAnimationLoop(() => {
			this.tick();
			this.renderer.render(this.scene, this.camera);
		});
	}

	stop() {
		this.renderer.setAnimationLoop(null);
	}

	tick() {
		const delta = clock.getDelta();

		for (const object of this.updatables) {
			object.tick(delta);
		}

		this.ballPhysics();
		this.update(delta);
	}

	check_victory() {
		if (Left_Score == 5 || Right_Score == 5) {
			Left_Score = 0;
			Right_Score = 0;
			document.getElementById("Left_Player").textContent = Left_Score;
			document.getElementById("Right_Player").textContent = Right_Score;
			alert("Someone won the game! Restarting the game...")
		}
	}

	resetBall(loser) {
		this.ball.mesh.position.x = 0;
		this.ball.mesh.position.y = 0;
		
		if (loser == 1) { // that means Left wins
			Left_Score++;
			this.ball.ballAngle = Math.PI;
		} else if (loser == 2) { // that means Right wins
			Right_Score++;
			this.ball.ballAngle = 0;
		}
	}

	checkPaddleCollision() {
		const length = (this.paddle1.length + 2 * this.paddle1.radius);

		if (this.ball.mesh.position.x <= - fieldWidth / 2 + this.paddle1.radius / 2
			&& this.ball.mesh.position.y >= this.paddle1.mesh.position.y - this.paddle1.length / 2
			&& this.ball.mesh.position.y <= this.paddle1.mesh.position.y + this.paddle1.length / 2) 
			{
				this.ball.mesh.position.x = this.paddle1.mesh.position.x + this.paddle1.radius / 2;
				this.ball.ballSpeed = - this.ball.ballSpeed;
				this.ball.ballAngle = Math.random() * Math.PI / 4;
			}

		if (this.ball.mesh.position.x >= fieldWidth / 2 - this.paddle2.radius / 2
			&& this.ball.mesh.position.y >= this.paddle2.mesh.position.y - this.paddle2.length / 2
			&& this.ball.mesh.position.y <= this.paddle2.mesh.position.y + this.paddle2.length / 2) 
			{
				this.ball.mesh.position.x = this.paddle2.mesh.position.x - this.paddle2.radius / 2;
				this.ball.ballSpeed = - this.ball.ballSpeed;
				this.ball.ballAngle = - Math.random() * Math.PI / 4;
			}
	}

	checkWallCollision() {
		if ((this.ball.mesh.position.y <= -(fieldLength / 2 - this.ball.radius))
			|| (this.ball.mesh.position.y >= (fieldLength / 2 - this.ball.radius))) {
			this.ball.ballAngle = - this.ball.ballAngle;
		}

		if (this.ball.mesh.position.x <= - fieldWidth / 2 + this.paddle2.depth / 2 - this.ball.radius) {
			this.ball.ballSpeed = - this.ball.ballSpeed;
			this.resetBall(2);
		}

		if (this.ball.mesh.position.x >= fieldWidth / 2 - this.paddle1.depth / 2 + this.ball.radius) {
			this.ball.ballSpeed = - this.ball.ballSpeed;
			this.resetBall(1);
		}
	}

	ballPhysics() {
		this.check_victory();
		this.checkPaddleCollision();
		this.checkWallCollision();
	}
}

export { Loop };
