class SceneManager{

    #camera;
    #scene;
    #renderer;
    //Manages our scene subjects
    #sceneSubjects; //array[]

    constructor(){
        this.#camera = this.buildCamera();
        this.#scene = new THREE.Scene();
        this.#renderer = new THREE.WebGLRenderer({antialiasing: true});
        this.#sceneSubjects = this.createSceneSubjects();
        this.generateBackground();
        this.onWindowResize();
    }

    /*
    Window Resize
    */
    onWindowResize(){
        this.#camera.aspect = window.innerWidth / window.innerHeight;
        this.#renderer.setSize(window.innerWidth, window.innerHeight);
        this.#camera.updateProjectionMatrix();
    }

    getScene(){
        return this.#scene;
    }
    getSceneSubjects(){
        return this.#sceneSubjects;
    }
    getCamera(){
        return this.#camera;
    }
    getRenderer(){
        return this.#renderer;
    }

    //buildScene();
    //buildRenderer();
    buildCamera(){
        this.#camera = new THREE.PerspectiveCamera(80, window.innerWidth/window.innerHeight, 0.1, 750);
        this.#camera.position.set(62, 41.24, 53);
        this.#camera.lookAt(0,0,0);
        this.#camera.updateProjectionMatrix();
        return this.#camera;
    }

    updateCamera(){
        if(this.#camera.position.x > 5){
            this.#camera.position.x -= 0.02;
            this.#camera.position.z -= 0.04;
            this.#camera.lookAt(0,0,0);
        }
        //Dont let go too close to mars
    }

    generateBackground(){
        const loader = new THREE.TextureLoader();
        const bgTexture = loader.load('../assets/2k_stars.jpg');
        this.#scene.background = bgTexture;
    }

    createSceneSubjects(){
        this.#sceneSubjects = [
            new Lighting(this.#scene),
            new Mars(this.#scene),
            new Stars(this.#scene)
        ];
        document.body.appendChild(this.#renderer.domElement);
        return this.#sceneSubjects;
    }

    update = function(){
        for(let i=0; i<this.#sceneSubjects.length; i++){
            this.#sceneSubjects[i].update();
        }
        this.updateCamera();
        this.#renderer.render(this.#scene, this.#camera);
    }.bind(this)
}