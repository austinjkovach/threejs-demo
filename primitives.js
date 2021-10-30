console.log('Hello primitives!');
// Find the latest version by visiting https://cdn.skypack.dev/three.
// https://threejs.org/docs/#manual/en/introduction/Installation
import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.133.1-a8rkd0QTHl2tMZXZJAEw/mode=imports,min/optimized/three.js';

const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({ canvas });

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xaaaaaa);

const fov = 40;
const aspect = 2; // the canvas default
const near = 0.1;
const far = 10000;

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 120;

const objects = [];
const spread = 15;

function addObject(x, y, obj) {
  obj.position.x = x * spread;
  obj.position.y = y * spread;

  scene.add(obj);
  objects.push(obj);
}

function createMaterial() {
  const material = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
  });

  const hue = Math.random();
  const saturation = 1;
  const luminance = 0.5;
  material.color.setHSL(hue, saturation, luminance);

  return material;
}

function addSolidGeometry(x, y, geometry) {
  const mesh = new THREE.Mesh(geometry, createMaterial());
  addObject(x, y, mesh);
}

const width = 8;
const height = 8;
const depth = 8;
addSolidGeometry(-2, -2, new THREE.BoxGeometry(width, height, depth));

createMaterial();

renderer.render(scene, camera);
