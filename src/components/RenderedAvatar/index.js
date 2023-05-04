import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
const newDiv = document.createElement("div");
newDiv.appendChild(renderer.domElement);

scene.background = new THREE.Color( 0x339cf1 );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );
const light = new THREE.AmbientLight('white', 0.8)
scene.add(light)
camera.position.z = 5;

const loader = new GLTFLoader();

loader.load('3dmodels/wsmith.glb', function (gltf) {
    const model = gltf.scene
    model.position.set( 0, 0, 0 );
    model.scale.set( 2, 2, 2 );

    scene.add(model);

}, undefined, function (error) {

    console.error(error);

});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate()

function RenderedAvatar() {
    return (
        <div ref={(nodeElement) => { nodeElement && nodeElement.appendChild(newDiv) }} />
    )
}

export default RenderedAvatar;