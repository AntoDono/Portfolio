<template>
    <div class="w-full h-full flex justify-center items-center overflow-x-hidden" ref="canvas_parent">
        <canvas class="w-screen h-screen opacity-60" ref="canvas"></canvas>
    </div>
</template>

<script setup>

import gsap from "gsap"
import { ref, onMounted } from 'vue'
import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';

const canvas = ref(null)
const canvas_parent = ref(null)
const emits = defineEmits(['percentage', 'ready'])
const size = {
    width: null,
    height: null
}
var scene, camera, renderer,particleSphere;
const animationTimeline = gsap.timeline()

const rendererReady = ref(false)
const name = ref(false) // name state
const sensitivity = 0.003
const total_nodes = 200
const new_lines = 20 // number of animated lines to spawn per second

// Store vertices and animated lines
var globalVertices = []
var animatedLines = []
var tapEffects = []
var lastLineSpawnTime = 0
const lineAnimationDuration = 1000 // 1 second animation duration in ms
const lineThickness = 3 // thickness of the animated lines
const tapEffectDuration = 800 // tap effect duration in ms
const tapEffectThickness = 3 // thickness of the tap effect circle

const render_loop = (time) => {

    particleSphere.rotation.x = time / 5000;
    particleSphere.rotation.y = time / 5000;
    
    // Spawn new animated lines every 1 second
    if (globalVertices.length > 0 && time - lastLineSpawnTime > 1000) {
        for (let i = 0; i < new_lines; i++) {
            spawnAnimatedLine(time)
        }
        lastLineSpawnTime = time
    }
    
    // Update and remove animated lines
    updateAnimatedLines(time)
    
    // Update tap effects
    updateTapEffects(time)
    
    renderer.render(scene, camera);
}

const spawnAnimatedLine = (currentTime) => {
    // Pick two random vertices
    const indexA = Math.floor(Math.random() * globalVertices.length)
    let indexB = Math.floor(Math.random() * globalVertices.length)
    while (indexB === indexA) {
        indexB = Math.floor(Math.random() * globalVertices.length)
    }
    
    const vertexA = globalVertices[indexA]
    const vertexB = globalVertices[indexB]
    
    // Create line geometry with Line2
    const lineGeometry = new LineGeometry()
    const positions = [vertexA.x, vertexA.y, vertexA.z, vertexA.x, vertexA.y, vertexA.z] // Start at same position
    lineGeometry.setPositions(positions)
    
    const lineMaterial = new LineMaterial({ 
        color: 0x5bd9fc, 
        linewidth: lineThickness,
        transparent: true, 
        opacity: 0.8,
        resolution: new THREE.Vector2(size.width, size.height)
    })
    const line = new Line2(lineGeometry, lineMaterial)
    
    particleSphere.add(line)
    
    // Random delay between 0 and 0.5 times the animation duration
    const randomDelay = Math.random() * lineAnimationDuration * 0.5
    
    animatedLines.push({
        line: line,
        geometry: lineGeometry,
        vertexA: vertexA,
        vertexB: vertexB,
        startTime: currentTime,
        duration: lineAnimationDuration,
        delay: randomDelay
    })
}

const updateAnimatedLines = (currentTime) => {
    for (let i = animatedLines.length - 1; i >= 0; i--) {
        const animLine = animatedLines[i]
        const elapsed = currentTime - animLine.startTime
        
        // Check if delay has elapsed
        if (elapsed < animLine.delay) {
            // Line is still invisible during delay
            animLine.line.visible = false
            continue
        }
        
        animLine.line.visible = true
        const adjustedElapsed = elapsed - animLine.delay
        const progress = Math.min(adjustedElapsed / animLine.duration, 1)
        
        // Update the second vertex position to animate from A to B
        const endX = animLine.vertexA.x + (animLine.vertexB.x - animLine.vertexA.x) * progress
        const endY = animLine.vertexA.y + (animLine.vertexB.y - animLine.vertexA.y) * progress
        const endZ = animLine.vertexA.z + (animLine.vertexB.z - animLine.vertexA.z) * progress
        animLine.geometry.setPositions([animLine.vertexA.x, animLine.vertexA.y, animLine.vertexA.z, endX, endY, endZ])
        
        // Fade out near the end
        if (progress > 0.7) {
            animLine.line.material.opacity = 0.8 * (1 - (progress - 0.7) / 0.3)
        }
        
        // Remove line after animation completes
        if (progress >= 1) {
            // Spawn tap effect at destination
            spawnTapEffect(animLine.vertexB, currentTime)
            
            particleSphere.remove(animLine.line)
            animLine.geometry.dispose()
            animLine.line.material.dispose()
            animatedLines.splice(i, 1)
        }
    }
}

const spawnTapEffect = (position, currentTime) => {
    // Create a circle outline with Line2 perpendicular to sphere surface
    const segments = 32
    const circleGeometry = new LineGeometry()
    const circlePositions = []
    
    // Calculate normal (radial direction from sphere center)
    const normal = new THREE.Vector3(position.x, position.y, position.z).normalize()
    
    // Create two perpendicular basis vectors for the circle plane
    // Find an arbitrary vector not parallel to the normal
    const arbitrary = Math.abs(normal.x) > 0.1 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0)
    const tangent1 = new THREE.Vector3().crossVectors(normal, arbitrary).normalize()
    const tangent2 = new THREE.Vector3().crossVectors(normal, tangent1).normalize()
    
    const initialRadius = 0.5 // Same as particle size
    for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2
        const cos = Math.cos(theta)
        const sin = Math.sin(theta)
        
        // Create circle in the plane perpendicular to normal
        circlePositions.push(
            position.x + (tangent1.x * cos + tangent2.x * sin) * initialRadius,
            position.y + (tangent1.y * cos + tangent2.y * sin) * initialRadius,
            position.z + (tangent1.z * cos + tangent2.z * sin) * initialRadius
        )
    }
    
    circleGeometry.setPositions(circlePositions)
    const circleMaterial = new LineMaterial({ 
        color: 0xffffff, 
        linewidth: tapEffectThickness,
        transparent: true, 
        opacity: 1,
        resolution: new THREE.Vector2(size.width, size.height)
    })
    const circle = new Line2(circleGeometry, circleMaterial)
    
    particleSphere.add(circle)
    
    tapEffects.push({
        circle: circle,
        geometry: circleGeometry,
        position: position,
        startTime: currentTime,
        initialRadius: initialRadius,
        maxRadius: initialRadius * 4,
        segments: segments,
        tangent1: tangent1,
        tangent2: tangent2
    })
}

const updateTapEffects = (currentTime) => {
    for (let i = tapEffects.length - 1; i >= 0; i--) {
        const effect = tapEffects[i]
        const elapsed = currentTime - effect.startTime
        const progress = Math.min(elapsed / tapEffectDuration, 1)
        
        // Expand the circle in the plane perpendicular to sphere surface
        const currentRadius = effect.initialRadius + (effect.maxRadius - effect.initialRadius) * progress
        const positions = []
        
        for (let j = 0; j <= effect.segments; j++) {
            const theta = (j / effect.segments) * Math.PI * 2
            const cos = Math.cos(theta)
            const sin = Math.sin(theta)
            
            // Expand in the tangent plane (perpendicular to radial direction)
            positions.push(
                effect.position.x + (effect.tangent1.x * cos + effect.tangent2.x * sin) * currentRadius,
                effect.position.y + (effect.tangent1.y * cos + effect.tangent2.y * sin) * currentRadius,
                effect.position.z + (effect.tangent1.z * cos + effect.tangent2.z * sin) * currentRadius
            )
        }
        effect.geometry.setPositions(positions)
        
        // Fade out
        effect.circle.material.opacity = 1 - progress
        
        // Remove when complete
        if (progress >= 1) {
            particleSphere.remove(effect.circle)
            effect.geometry.dispose()
            effect.circle.material.dispose()
            tapEffects.splice(i, 1)
        }
    }
}

watch(rendererReady, async(new_value, old_value)=>{
    if (new_value) {
        
        setInterval(()=>{
            talk_effect()
        }, 1000)
        await sleep(1000)
        name.value = true
        await sleep(1000)

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

    renderer = new THREE.WebGLRenderer({ canvas: canvas.value, alpha: true });
    renderer.setClearColor(0x000000, 0); // Transparent background
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
        globalVertices.push(vertex) // Store for animated lines

        // This adds static lines
        // if (THREE.MathUtils.randInt(1, 5)%5 == 0){
        //     let random_start = THREE.MathUtils.randInt(0, vertices.length/10)
        //     let random_amt = THREE.MathUtils.randInt(1, 3) // how many nodes can connect
        //     let random_vertices = vertices.slice(random_start, random_start + random_amt)

        //     for (let v of random_vertices){ // adding it separately because i need it to be unpacked
        //         lineVertices.push(v.x)
        //         lineVertices.push(v.y)
        //         lineVertices.push(v.z)
        //     }
        // }

        emits("percentage", { percent: i/total_nodes })
    }

    unpacked_vertices = new Float32Array(unpacked_vertices)
    geometry.setAttribute('position', new THREE.BufferAttribute(unpacked_vertices, 3));
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(lineVertices, 3));
    const lineMaterial = new THREE.LineBasicMaterial({ color: '#2063ab', linewidth: lineThickness });  // White color for the lines
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    
    // Create circular texture for points
    const textureCanvas = document.createElement('canvas');
    textureCanvas.width = 32;
    textureCanvas.height = 32;
    const ctx = textureCanvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    const circleTexture = new THREE.CanvasTexture(textureCanvas);
    
    var particles = new THREE.Points(geometry, new THREE.PointsMaterial({ 
        color: '#1dcdfe', 
        size: 1,
        map: circleTexture,
        transparent: true,
        alphaTest: 0.5
    }))
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
        
        // Update Line2 materials resolution
        animatedLines.forEach(animLine => {
            animLine.line.material.resolution.set(size.width, size.height)
        })
        tapEffects.forEach(effect => {
            effect.circle.material.resolution.set(size.width, size.height)
        })
    })

    window.addEventListener('mousemove', (event)=>{
        let x = -(event.clientX - window.innerWidth/2) * sensitivity
        let y = -(event.clientY - window.innerHeight/2) * sensitivity
        camera.position.x = x
        camera.position.y = y
    })

 
    rendererReady.value = true
    emits('ready')
}
onMounted(()=>{
    init()
})
 
</script>