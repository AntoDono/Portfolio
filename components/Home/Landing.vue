<template>
    <div class="flex flex-col justify-center items-center z-30">
        <div class="w-full h-full flex justify-center items-center overflow-x-hidden" ref="canvas_parent">
            <canvas class="w-screen h-screen" ref="canvas"></canvas>
        </div>
        <div class="absolute">
            <!-- <h1 class="font-bogart text-gray-300 text-5xl">Hello, I am Youwei</h1> -->
            <PopupText :show="name" text="Hello, I am Youwei." size="text-[7.5vmin]"/>
        </div>
        <div class="flex justify-center gap-x-7 absolute top-[60%] flex-wrap p-5">
            <PopupText :show="t1" text="Machine Learning" size="text-[3.5vmin]"/>
            <PopupText :show="t2" text="Artificial Intelligence" size="text-[3.5vmin]"/>
            <PopupText :show="t3" text="Programmer" size="text-[3.5vmin]"/>
        </div>
        <div class="absolute w-full bottom-[10%] flex justify-center opacity-0" ref="ArrowRef">
            <div class="animate-bounce hover:cursor-pointer">
                <div @click="scroll">
                    <img class="rotate-90 h-[10vmin]" src="~/assets/images/pageselect.png" alt="arrow pointing down"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import gsap from "gsap"
import { ref, onMounted } from 'vue'
import * as THREE from 'three';

const canvas = ref(null)
const canvas_parent = ref(null)
const emits = defineEmits([
    'percentage'
])
const size = {
    width: null,
    height: null
}
var scene, camera, renderer,particleSphere;
const animationTimeline = gsap.timeline()

const rendererReady = ref(false)
const name = ref(false) // name state
const t1 = ref(false)
const t2 = ref(false)
const t3 = ref(false)
const ArrowRef = ref(null)
const sensitivity = 0.001
const total_nodes = 500

const render_loop = (time) => {

    particleSphere.rotation.x = time / 5000;
    particleSphere.rotation.y = time / 5000;
    // camera.position.z += Math.sin(0.0025 * time) / 5
    renderer.render(scene, camera);
}

watch(rendererReady, async(new_value, old_value)=>{
    if (new_value) {
        
        for (let i = 0; i < 5; i ++) talk_effect()
        await sleep(1000)
        name.value = true
        await sleep(600)
        t1.value = true
        await sleep(600)
        t2.value = true
        await sleep(600)
        t3.value = true
        await sleep(600)

        gsap.to(ArrowRef.value,{
            duration: 1,
            alpha: 1,
            ease: "power1.easeOut"
        })

    }
})

const scroll = ()=> {
    gsap.to(window, { duration: 0.15, ease: "power1.inOut", scrollTo: "#titles"})
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const talk_effect = ()=>{
    animationTimeline.to(camera.position, {
        z: camera.position.z * 17/18,
        duration: 1,
        delay: 0.5,
        ease: "power3.easeIn"
    }).to(camera.position, {
        z: camera.position.z * 18/17,
        duration: 1.5,
        ease: "power3.easeOut"
    })
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

    const geometry = new THREE.BufferGeometry()
    const lineGeometry = new THREE.BufferGeometry();
    var unpacked_vertices = []
    var vertices = []
    var lineVertices = []
    // const material = new THREE.MeshNormalMaterial();
    
    var radius = Math.min(30, size.width / 4);

    THREE.MathUtils.seededRandom(0.19144689152017236)
    
    for (let i = 1; i <= total_nodes; i ++){
        
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

        if (THREE.MathUtils.randInt(1, 5)%5 == 0){
            let random_start = THREE.MathUtils.randInt(0, vertices.length/10)
            let random_amt = THREE.MathUtils.randInt(1, 3) // how many nodes can connect
            let random_vertices = vertices.slice(random_start, random_start + random_amt)

            for (let v of random_vertices){ // adding it separately because i need it to be unpacked
                lineVertices.push(v.x)
                lineVertices.push(v.y)
                lineVertices.push(v.z)
            }
        }

        emits("percentage", { percent: i/total_nodes })
    }

    unpacked_vertices = new Float32Array(unpacked_vertices)
    geometry.setAttribute('position', new THREE.BufferAttribute(unpacked_vertices, 3));
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(lineVertices, 3));
    const lineMaterial = new THREE.LineBasicMaterial({ color: '#2063ab' });  // White color for the lines
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    
    var particles = new THREE.Points(geometry, new THREE.PointsMaterial({ color: '#1dcdfe', size: 0.7 }))
    particles.boundingSphere = 50
    
    var renderGroup = new THREE.Group()
    renderGroup.add(particles)
    
    particleSphere = new THREE.Group()
    particleSphere.add(renderGroup)
    particleSphere.add(lines)
    scene.add(particleSphere)
    
    camera.lookAt(particleSphere.position)
    renderer.setAnimationLoop(render_loop);

    window.addEventListener('resize', () => {
        size.width = canvas.value.offsetWidth
        size.height = canvas.value.offsetHeight

        canvas.value.width = size.width
        canvas.value.height = size.height
        // Update camera
        camera.aspect = size.width / size.height
        camera.updateProjectionMatrix()
        // Update renderer
        renderer.setSize(size.width, size.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    window.addEventListener('mousemove', (event)=>{
        let x = -(event.clientX - window.innerWidth/2) * sensitivity
        let y = -(event.clientY - window.innerHeight/2) * sensitivity
        camera.position.x = x
        camera.position.y = y
    })


    rendererReady.value = true
}
onMounted(()=>{
    init()
})

</script>