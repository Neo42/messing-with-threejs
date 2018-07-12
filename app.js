function init() {
	var scene = new THREE.Scene();
	var box = getBox(1, 1, 1);
	var plane = getPlane(4);
	box.position.y = box.geometry.parameters.height / 2;
	plane.rotation.x = Math.PI / 2;
	scene.add(box);
	scene.add(plane);

	var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);

	camera.position.z = 3;
	camera.position.x = 2.2;
	camera.position.y = 2.3;
	camera.lookAt(new THREE.Vector3(0, 0, 0));

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.getElementById('webgl').appendChild(renderer.domElement);
	update(renderer, scene, camera);
	return scene;
}

function getPlane(size) {
	var geometry = new THREE.PlaneGeometry(size, size);
	var material = new THREE.MeshBasicMaterial({
		color: 'rgb(82, 82, 82)',
		side: THREE.DoubleSide,
	});
	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}

function update(renderer, scene, camera) {
	renderer.render(scene, camera);
	requestAnimationFrame(function() {
		update(renderer, scene, camera);
	});
}

function getBox(w, h, d) {
	var geometry = new THREE.BoxGeometry(1, 1, 1);
	var material = new THREE.MeshBasicMaterial({
		color: 'rgb(236, 121, 119)',
	});

	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}
var scene = init();
