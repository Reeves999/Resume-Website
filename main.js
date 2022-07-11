import './style.css';

import * as THREE from 'three';
import { Camera, MeshBasicMaterial, PointLight, TorusGeometry } from 'three';

const scene = new THREE.Scene();

const camrea = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camrea.position.setZ(30);

renderer.render(scene, camrea);

const geometry = new THREE.TorusGeometry();
const material = new THREE.MeshStandardMaterial( {color: blue} );
const torus = new THREE.Mesh(geometry, material);

scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5)

scene.add(pointLight)

function animate() {
    requestAnimationFrame(animate);

    torus.rotate.x += 0.1
    torus.rotate.y += 0.2
    torus.rotate.z += 0.001

    renderer.render(scene, camrea);
}
animate()
