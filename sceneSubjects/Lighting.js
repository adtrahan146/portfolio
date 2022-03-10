class Lighting{

    #scene
    #pointLight

    constructor(scene){
        this.#scene = scene;
        this.#pointLight = new THREE.DirectionalLight(0xffffff, 1);
        this.generateLights();
    }

    generateLights(){
        this.#pointLight.position.set(0,0,100);
        this.#scene.add(this.#pointLight);
    }

    update(){
        this.#pointLight.position.y += 0.02;
        this.#pointLight.lookAt(0,0,0);
    }
}