
class Mars{

    #colorMap;
    #normalMap;
    #heightMap;
    #loader;
    #scene;
    #mars;

    constructor(scene){
        this.#scene = scene;
        this.#loader = new THREE.TextureLoader();
        this.#colorMap = this.#loader.load('./assets/5672_marsmap6k_v2.jpg');
        this.#normalMap = this.#loader.load('./assets/5672_mars_6k_normal.jpg');
        this.#heightMap = this.#loader.load('./assets/5672_mars_6k_topo.jpg');
        this.#mars = this.generate();
    }

    generate(){
        //MARS
        const geometry = new THREE.SphereGeometry( 40, 1028, 1028 );
        const sphereMaterial = new THREE.MeshStandardMaterial( 
            {
                map: this.#colorMap,
                normalMap: this.#normalMap,
                displacementMap: this.#heightMap
            } 
            );
        sphereMaterial.displacementScale = -3.5;
        sphereMaterial.roughness = 2;
        const marsPrefab = new THREE.Mesh( geometry, sphereMaterial );
        this.#mars = marsPrefab;
        this.#scene.add( this.#mars.rotateX(10).rotateZ(5) );
        this.generateHemisphere();
        return this.#mars;
    }

    generateHemisphere(){
        //Hemisphere
        const hemisphereGeometry = new THREE.SphereGeometry(39.18, 512, 512);
        const hemisphereMaterial = new THREE.MeshStandardMaterial(
            {
                color: 0x9C2E35,
                opacity: 0.2,
                transparent: true
            }
            );

        const hemisphere = new THREE.Mesh(hemisphereGeometry, hemisphereMaterial);
        this.#scene.add(hemisphere);
    }

    update(){
        this.#mars.rotation.x += 0.0001;
        this.#mars.rotation.y += 0.0001;
    }
}