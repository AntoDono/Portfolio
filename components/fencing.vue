<template>
    <div class="flex justify-center items-center z-30">
        <div class="w-[80vw] text-white flex justify-around items-center flex-row">
            <div class="w-[500px] basis-auto" ref="description">
                <h2 class="text-white text-[3rem] font-bogart text-left">Fencing,</h2>
                <p class="text-white font-montserrat">Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint?</p>
                <p class="text-white font-montserrat pt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga?
                </p>
            </div>
            <div class="w-1/2 h-full flex justify-center items-center" ref="canvas_parent">
                    <canvas class="w-full h-full" ref="canvas"></canvas>
            </div>
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
    var camera, renderer;

    onMounted(()=>{

            // init
            size.height = canvas_parent.value.offsetHeight
            size.width = canvas_parent.value.offsetWidth
        
            camera = new THREE.PerspectiveCamera( 70, size.width / size.height, 0.01, 10 );
            camera.position.z = 1;
        
            const scene = new THREE.Scene();
        
            const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
            const material = new THREE.MeshNormalMaterial();
        
            const mesh = new THREE.Mesh( geometry, material );
            scene.add( mesh );
        
            renderer = new THREE.WebGLRenderer( {canvas: canvas.value} );
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            renderer.setSize(size.width, size.height)
        
            // animation
        
            function animation( time ) {
        
                mesh.rotation.x = time / 2000;
                mesh.rotation.y = time / 1000;
        
                renderer.render( scene, camera );
        
            }

            renderer.setAnimationLoop( animation );

            window.addEventListener('resize', () =>
            {
                size.width = canvas_parent.value.offsetWidth
                size.height = canvas_parent.value.offsetHeight
                // Update camera
                camera.aspect = size.width / size.height
                camera.updateProjectionMatrix()
                // Update renderer
                renderer.setSize(this.graphics.sizes.width, this.graphics.sizes.height)
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            })


    })

</script>