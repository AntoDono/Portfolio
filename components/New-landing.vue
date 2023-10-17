<template>
    <div class="flex justify-center items-center z-30">
        <div class="w-full h-full flex justify-center items-center overflow-x-hidden" ref="canvas_parent">
            <canvas class="w-full h-full" ref="canvas"></canvas>
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import * as THREE from 'three';

const canvas = ref(null)
const canvas_parent = ref(null)
const size = {
    width: null,
    height: null
}
var scene, camera, renderer,particleSphere;

const render_loop = (time) => {

    particleSphere.rotation.x = time / 5000;
    particleSphere.rotation.y = time / 5000;

    renderer.render(scene, camera);

}

const init = () => {

    // init
    size.height = canvas.value.offsetHeight
    size.width = canvas.value.offsetWidth

    camera = new THREE.PerspectiveCamera(70, size.width / size.height, 0.01, 10);
    camera.far = 1000
    camera.position.z = 70;
    camera.updateProjectionMatrix()

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({ canvas: canvas.value });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(size.width, size.height)

    // animation

    
    window.addEventListener('resize', () => {
        size.width = canvas.value.offsetWidth
        size.height = canvas.value.offsetHeight
        // Update camera
        camera.aspect = size.width / size.height
        camera.updateProjectionMatrix()
        // Update renderer
        renderer.setSize(size.width, size.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    const geometry = new THREE.BufferGeometry()
    const lineGeometry = new THREE.BufferGeometry();
    var unpacked_vertices = []
    var vertices = []
    var lineVertices = []
    // const material = new THREE.MeshNormalMaterial();
    
    var radius = Math.min(30, size.width / 4);

    THREE.MathUtils.seededRandom(0.19144689152017236)

    console.log(THREE.MathUtils.seededRandom())
    
    for (let i = 0; i < 1000; i ++){
        
        let vertex = new THREE.Vector3()
        
        var theta = THREE.MathUtils.randFloatSpread(360)
        var phi = THREE.MathUtils.randFloatSpread(360)

        vertex.x = radius * Math.sin(theta) * Math.cos(phi)
        vertex.y = radius * Math.sin(theta) * Math.sin(phi)
        vertex.z = radius * Math.cos(theta)
    
        unpacked_vertices.push(vertex.x)
        unpacked_vertices.push(vertex.y)
        unpacked_vertices.push(vertex.z)

        vertices.push(vertex)

        if (THREE.MathUtils.randInt(1, 100)%3 == 0){
            let random_start = THREE.MathUtils.randInt(0, vertices.length/10)
            let random_amt = THREE.MathUtils.randInt(1,10)
            let random_vertices = vertices.slice(random_start, random_start + random_amt)

            for (let v of random_vertices){ // adding it separately because i need it to be unpacked
                lineVertices.push(v.x)
                lineVertices.push(v.y)
                lineVertices.push(v.z)
            }
        }
    }
    unpacked_vertices = new Float32Array(unpacked_vertices)
    geometry.setAttribute('position', new THREE.BufferAttribute(unpacked_vertices, 3));
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(lineVertices, 3));
    const lineMaterial = new THREE.LineBasicMaterial({ color: '#34aeeb' });  // White color for the lines
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    
    var particles = new THREE.Points(geometry, new THREE.PointsMaterial({ color: '#34aeeb', size: 0.5 }))
    particles.boundingSphere = 50
    
    var renderGroup = new THREE.Group()
    renderGroup.add(particles)
    
    particleSphere = new THREE.Group()
    particleSphere.add(renderGroup)
    particleSphere.add(lines)
    scene.add(particleSphere)
    
    camera.lookAt(particleSphere.position)
    renderer.setAnimationLoop(render_loop);
}
onMounted(init)

</script>