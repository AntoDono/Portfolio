var init = function () {

    var width = 100,
        height = 50;

    //create scene w/ fog
    var scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.111); // (color, density)

    //create geometry using simplex noise 
    var geometry = new THREE.PlaneGeometry(1, .5, width - 1, height - 1), // (width, height, widthSegments, heightSegments)
        simplexNoise = new SimplexNoise(),
        octaves = 2,
        persistence = 2,
        frequency,
        amplitude,
        totalAmplitude,
        noise;
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            noise = 0;
            frequency = 8;
            amplitude = 0.125;
            totalAmplitude = 1;
            for (var i = 0; i < octaves; i++) {
                noise += (simplexNoise.noise2D(x / frequency, y / frequency) / 2 + 0.5) * amplitude;
                totalAmplitude += amplitude;
                amplitude *= persistence;
                frequency *= (i === 0) ? 3 : 2;
            }
            noise /= totalAmplitude;
            geometry.vertices[x + y * width].z += (noise - 0.5) * 2;
        }
    } //*/

    geometry.dynamic = true;
    geometry.verticesNeedUpdate = true
    geometry.computeFaceNormals();
    geometry.computeVertexNormals();
    geometry.normalsNeedUpdate = true;

    //create material
    var material = new THREE.MeshLambertMaterial({
        vertexColors: THREE.VertexColors,
        shading: THREE.FlatShading,
        wireframe: true
    });

    //apply material to geometry
    var mesh = new THREE.Mesh(geometry, material);
    mesh.scale.set(2, 2, 0.3)
    mesh.scale.multiplyScalar(10);

    //create lighting
    var ambientLight = new THREE.AmbientLight(0xffffff); // (color)
    var primaryLight = new THREE.DirectionalLight(0xffffff, 3.5); // (color, intensity)
    primaryLight.position.set(0, 20, 60);
    var secondaryLight = new THREE.DirectionalLight(0xffffff, 3.5); // (color, intensity)
    secondaryLight.position.set(0, 0, 60);

    //create camera
    var camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000); // (fov, aspect, near, far)
    camera.rotation.x = 75 * Math.PI / 180;
    camera.position.set(0, -15, 1);
    //camera.lookAt(mesh.position);

    //add objects to scene
    scene.add(mesh);
    scene.add(ambientLight);
    scene.add(primaryLight);
    scene.add(secondaryLight);
    scene.add(camera);

    //create renderer
    var renderer = new THREE.WebGLRenderer({
        antialiase: false
    });
    renderer.setClearColor(scene.fog.color, 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //create stats
    stats = new Stats();
    stats.setMode(0); // 0: fps, 1: ms
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    stats.domElement.style.right = '0px';
    document.body.appendChild(stats.domElement); //*/

    //create user controls
    controls = new THREE.OrbitControls(camera);
    controls.autoRotate = true;
    controls.enabled = false;
    controls.minPolarAngle = 90 * Math.PI / 180;
    controls.maxPolarAngle = 210 * Math.PI / 180;
    controls.minAzimuthAngle = 0;
    controls.maxAzimuthAngle = 0;
    controls.noKeys = true;
    document.body.addEventListener("mousedown", function (e) {
        controls.enabled = true;
    });
    document.body.addEventListener("mouseup", function (e) {
        controls.enabled = false;
    });//*/

    var z = 0.0;
    var render = function () {

        //rotate terrain
        mesh.rotation.z -= .01 * Math.PI / 180;

        //animate terrain
        for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
                noise = 0;
                frequency = 8;
                amplitude = 0.125;
                totalAmplitude = 1;
                for (var i = 0; i < octaves; i++) {
                    noise += (simplexNoise.noise3D(x / frequency, y / frequency, z) / 2 + 0.5) * amplitude;
                    totalAmplitude += amplitude;
                    amplitude *= persistence;
                    frequency *= (i === 0) ? 3 : 2;
                }
                noise /= totalAmplitude;
                geometry.vertices[x + y * width].z = (noise - 0.5) * 2;
            }
        } //*/
        geometry.verticesNeedUpdate = true;
        z += 0.005;

        //adjust face colors based on vertex height
        for (i = 0; i < geometry.faces.length; i++) {
            var color;
            if (geometry.vertices[geometry.faces[i].a].z > -0.6)
                color = 0x448ab1;
            else if (geometry.vertices[geometry.faces[i].a].z >= -0.85)
                color = 0x307da9
            else
                color = 0x2b7098;
            if (geometry.faces[i] instanceof THREE.Face3) {
                geometry.faces[i].vertexColors[0] = new THREE.Color(color);
                geometry.faces[i].vertexColors[1] = new THREE.Color(color);
                geometry.faces[i].vertexColors[2] = new THREE.Color(color);
            }
        }
        geometry.colorsNeedUpdate = true; //*/

        renderer.render(scene, camera);

    };

    //animation loop
    var animate = function () {

        requestAnimationFrame(animate);

        render();
        stats.update();
    };

    //handle resizing
    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate();

}();