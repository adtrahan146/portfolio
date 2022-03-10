import * as THREE from "../node_modules/three/build/three.js";
import {OrbitControls} from '../scripts/OrbitControls.js';

const sceneManager = new SceneManager();
// sceneManager.createSceneSubjects();

bindEventListeners();
render();

const controls = new OrbitControls(sceneManager.getCamera(), sceneManager.getRenderer().domElement);
controls.enableDampening = true;
controls.dampingFactor = 0.2;

function bindEventListeners() {
	window.onresize = sceneManager.onWindowResize();
}

function render() {
    sceneManager.onWindowResize();
    sceneManager.update();
    requestAnimationFrame(render);
}

