<template>
    <div class="flex flex-col items-center h-full">
        <div class="w-full h-full flex justify-center items-center overflow-x-hidden" ref="canvas_parent">
            <canvas class="w-screen h-screen opacity-80" ref="canvas"></canvas>
            <!-- <h2 class="pl-20 pr-20 absolute text-white font-avenir overflow-y-hidden text-[4.5vmin] text-center">{{
                currentReply }}</h2> -->
            <div class="absolute overflow-y-scroll w-[80%] h-[70%] p-10 flex items-center flex-col text-white" ref="messageDiv">
                <div class="w-full flex flex-col gap-y-10 p-10">
                    <div v-for="message in chatMessages" :key="message.content" 
                        class="text-white font-avenir overflow-y-hidden text-[3.5vmin]">
                        <h3 v-if="message.role == 'user'" class="text-left text-slate-300"
                            :style="{ color: message.turn == chatMessages.length ? 'white' : 'rgb(203, 213, 225)' }">{{ message.content }}</h3>
                        <h3 v-if="message.role == 'bot'" class="text-right text-slate-300" 
                            :style="{ color: message.turn == chatMessages.length ? 'white' : 'rgb(203, 213, 225)' }">{{ message.content }}</h3>
                    </div>
                </div>
            </div>

        </div>
        <form class="absolute bottom-[5%] chat-input" ref="chat_form" @submit="sendMessage">
            <label for="chat" class="sr-only">Your message</label>
            <div class="flex items-center py-6 px-3 rounded-lg bg-primary">
                <input type="input" id="chat" rows="1" ref="chat_input"
                    class="block mx-4 h-full p-2.5 w-full outline-none text-sm rounded-lg border-2 border-white bg-background border-gray-600:placeholder-gray-400 text-white focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your message..." autocomplete="off"/>
                <button type="submit"
                    class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                    <svg class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z">
                        </path>
                    </svg>
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>

import gsap from "gsap"
import { ref, onMounted } from 'vue'
import * as THREE from 'three';
const { $chat } = useNuxtApp()

const chatMessages = ref([
    {
        role: "bot",
        content: "Hi, it is Youwei! Wassup, what's your name?",
        turn: 1
    }
])

const canvas = ref(null)
const canvas_parent = ref(null)
const chat_form = ref(null)
const chat_input = ref(null)
const messageDiv = ref(null)
const emits = defineEmits([
    'percentage'
])
const size = {
    width: null,
    height: null
}
var scene, camera, renderer, particleSphere;
const animationTimeline = gsap.timeline()

const rendererReady = ref(false)
const name = ref(false) // name state
const t1 = ref(false)
const t2 = ref(false)
const t3 = ref(false)
const ArrowRef = ref(null)
const sensitivity = 0.001
const total_nodes = 500

const sendMessage = async(e) => {
    e.preventDefault()

    let message = chat_input.value.value
    if (!message) return
    chat_input.value.value = ""

    chatMessages.value.push({
        role: "user",
        content: message,
        turn: chatMessages.value.length + 1
    })

    await $chat(message, chatMessages, messageDiv)
}

const render_loop = (time) => {

    particleSphere.rotation.x = time / 5000;
    particleSphere.rotation.y = time / 5000;
    // camera.position.z += Math.sin(0.0025 * time) / 5
    renderer.render(scene, camera);
}

watch(rendererReady, async (new_value, old_value) => {
    if (new_value) {

        for (let i = 0; i < 5; i++) talk_effect()
        await sleep(1000)
        name.value = true
        await sleep(600)
        t1.value = true
        await sleep(600)
        t2.value = true
        await sleep(600)
        t3.value = true
        await sleep(600)

        gsap.to(ArrowRef.value, {
            duration: 1,
            alpha: 1,
            ease: "power1.easeOut"
        })

    }
})

const scroll = () => {
    gsap.to(window, { duration: 0.15, ease: "power1.inOut", scrollTo: "#titles" })
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const talk_effect = () => {
    animationTimeline.to(camera.position, {
        z: camera.position.z * 17 / 18,
        duration: 1,
        delay: 0.5,
        ease: "power3.easeIn"
    }).to(camera.position, {
        z: camera.position.z * 18 / 17,
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

    for (let i = 1; i <= total_nodes; i++) {

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

        if (THREE.MathUtils.randInt(1, 5) % 5 == 0) {
            let random_start = THREE.MathUtils.randInt(0, vertices.length / 10)
            let random_amt = THREE.MathUtils.randInt(1, 3) // how many nodes can connect
            let random_vertices = vertices.slice(random_start, random_start + random_amt)

            for (let v of random_vertices) { // adding it separately because i need it to be unpacked
                lineVertices.push(v.x)
                lineVertices.push(v.y)
                lineVertices.push(v.z)
            }
        }

        emits("percentage", { percent: i / total_nodes })
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

    window.addEventListener('mousemove', (event) => {
        let x = -(event.clientX - window.innerWidth / 2) * sensitivity
        let y = -(event.clientY - window.innerHeight / 2) * sensitivity
        camera.position.x = x
        camera.position.y = y
    })


    rendererReady.value = true
}
onMounted(() => {
    init()
})

</script>

<style>
.chat-input {
    width: 80%;
}
</style>