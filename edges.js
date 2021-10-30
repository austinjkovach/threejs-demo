console.log('Hello edges!');
// Find the latest version by visiting https://cdn.skypack.dev/three.
// https://threejs.org/docs/#manual/en/introduction/Installation
import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.133.1-a8rkd0QTHl2tMZXZJAEw/mode=imports,min/optimized/three.js';

const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({ canvas });

const fov = 40; // 75
const aspect = 2; // the canvas default
const near = 0.1;
const far = 10000; // 5

// Camera
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xaaaaaa);

// Light
const color = 0xffffff;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
scene.add(light);

// Material
function makeInstance() {
  const material = new THREE.MeshPhongMaterial({ color });

  const size = 8;
  const widthSegments = 2;
  const heightSegments = 2;
  const depthSegments = 2;
  const boxGeometry = new THREE.BoxGeometry(
    size,
    size,
    size,
    widthSegments,
    heightSegments,
    depthSegments
  );
  const geometry = new THREE.EdgesGeometry(boxGeometry);
  return geometry;
}

makeInstance();

renderer.render(scene, camera);
