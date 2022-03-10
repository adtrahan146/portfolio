class Stars{

    #scene;
    #star;
    #starGeometry;
    #starMaterial;
    #starGroup;

    constructor(scene){
        this.#scene = scene;
        this.#starGeometry = new THREE.SphereGeometry(0.1, 24, 24);
        this.#starMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
        this.#starGroup = new THREE.Group();
        this.generateGalaxy(1250);
    }

    //Populate a little galaxy backdrop to go with other png
    generateGalaxy(numOfStars){
        for(let i=0; i<numOfStars; i++){
            const star = this.makeStar();
            this.#starGroup.add(star);
        }
        // this.#starGroup.position.set(0,0,0);
        this.#scene.add(this.#starGroup);
    }

    //Create star function
    makeStar(){   
        const star = new THREE.Mesh(this.#starGeometry, this.#starMaterial);
        
        const x = THREE.MathUtils.randFloat(-800, 800);
        const y = THREE.MathUtils.randFloat(-800, 800);
        const z = THREE.MathUtils.randFloat(-800, 800);
        star.position.set(x, y, z);
        return star;
    }
    
    update(){
        this.#starGroup.position.x -= 0.01;
    }
}