const container = document.getElementById('simulation-container');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.set(0,2,5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5,10,7.5);
scene.add(light);

const geometry = new THREE.BoxGeometry(1, 0.3, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ffcc });
const drone = new THREE.Mesh(geometry, material);
scene.add(drone);

function animate() {
    requestAnimationFrame(animate);
    drone.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});