<template>
    <div class="flex">
        <Renderer ref="renderer" antialias orbit-ctrl :alpha="true" :width="600" :height="500" >
            <Camera :position="{ y: 7, x: 7, z: 7}" ref="camera"/>
            <Scene>
                <AmbientLight color="#f6cd8b" :intensity="2" />
                <!-- <HemisphereLight skyColor="#d90368" groundColor="#64a6bd" :intensity="2"/>  -->
                <GltfModel
                    src="/blender/model1.glb"
                    @load="onReady"
                />
            </Scene>
        </Renderer>
        <div class="w-full flex justify-center items-center flex-col">
            <h1 class="font-aileron text-5xl text-transparent bg-clip-text bg-gradient-to-br from-accent2 to-accent1">I am Youwei Zhen.</h1>
            <p class="font-bogart text-accent4 pt-10">
                Fullstack developer • Web Developer • Programmer
            </p>
            <p class="font-bogart text-accent4">
                Machine Learning Enthusiast • Entrepreneur
            </p>
            <p class="font-bogart text-accent4">
                Student at Staten Island Technical High School
            </p>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { sRGBEncoding } from 'three';
import * as THREE from 'three';

export default defineComponent({
    setup() {
        
    },
    data(){
        return {
            sRGBEncoding: null,
            renderer: null,
            model: null
        }
    },
    mounted() {
        this.renderer = this.$refs['renderer']
        this.renderer.renderer.outputEncoding = sRGBEncoding
        this.renderer.onBeforeRender(()=>{
            if (this.model) this.model.rotation.y += 0.01;
        })
        // console.log(this.$refs['renderer'].renderer)
    },
    methods:{
        onReady(model){
            // console.log("Loaded Model")
            this.model = model.scene
            model.scene.traverse((obj)=>{
                // console.log(obj)
                if (obj.isMesh ) {
                    obj.material.wireframe = true
                    obj.material.color = new THREE.Color("#032cfc")
                }
            })
        }
    },
    name: "Landing"
})
</script>
