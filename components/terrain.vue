<template>
  <div class="h-[500vh] z-10">
    <Renderer class="fixed top-0" ref="renderer" resize="window" antialias autoClear>
      <Camera :position="{ x: 50, y: 50, z: 50 }" ref="camera"/>
      <Scene ref="scene">
        <PointLight :position="{ x: 25, y: 25, z: 25 }" />
        <!-- <Plane
          :position="{ x: 0, y: 0, z: 0 }"
          :rotation="{x:-Math.PI/2}"
          :width="100"
          :height="100"
          :widthSegments="50"
          :heightSegments="50"
          ref="plane"
        >
          <BasicMaterial color="#1895dc" />
        </Plane> -->
      </Scene>
    </Renderer>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import SimplexNoise from "simplex-noise";
import * as THREE from 'three';

export default defineComponent({
  setup() {},
  name: "terrain",
  data(){
    return{
      segmentsX: 20,
      segmentsZ: 20,
      segmentSize: 15,
      maxAmplitude: 12,
      speed: 0.007,
      camera: null,
      sizeX: null,
      sizeZ: null,
      geometry: null,
      terrain: null,
      currentZ: {},
      mouse: { x:null, y: null }
    }
  },
  methods: {
    sinZ(pos, amplitude){
      return Math.sin(pos) * amplitude
    },
    cosZ(pos, amplitude){
      return Math.cos(pos + Math.PI/2) * amplitude
    }
  },
  mounted() {

    this.camera = this.$refs['camera'].camera

    this.camera.rotation.y = Math.PI/16
    this.camera.rotation.x = -Math.PI/4 // tilt down

    this.sizeX = 15 * this.segmentsX;
    this.sizeZ = 15 * this.segmentsZ;

    this.geometry = new THREE.PlaneBufferGeometry(this.sizeX, this.sizeZ, this.segmentsX, this.segmentsZ);
    this.geometry.rotateX(Math.PI * -0.5);

    const material = new THREE.MeshBasicMaterial({
      color: "#0091ff",
      wireframe: true,
    });

    const terrain = new THREE.Mesh(this.geometry, material);
    this.terrain = terrain

    this.$refs['scene'].add(terrain)

    console.log(terrain)

    const totalsegmentsX = this.segmentsX + 1;
    const totalsegmentsZ = this.segmentsZ + 1;

    // sets initial z position
    for(let z = 0; z < totalsegmentsZ; z++) {
      for(let x = 0; x < totalsegmentsX; x++) {
        const index = 3 * (z * totalsegmentsX + x);
        let pos = Math.random() * Math.random()
        let initialZ
        this.currentZ[index] = {
          pos: pos, 
          method: Math.round(Math.random()),
          amplitude: Math.random() * this.maxAmplitude,
          increment: Math.random() * this.speed
        } 

        if (this.currentZ[index].method == 0) initialZ = this.sinZ(pos, this.currentZ[index].amplitude)
        else if (this.currentZ[index].method == 1) initialZ = this.cosZ(pos, this.currentZ[index].amplitude)
        
        this.geometry.attributes.position.array[index + 1] = initialZ
      }
    }

    this.geometry.attributes.position.needsUpdate = true;

    this.$refs['renderer'].onBeforeRender(() => {
      this.geometry.attributes.position.needsUpdate = true;

      for(let z = 0; z < totalsegmentsX; z++) {
        for(let x = 0; x < totalsegmentsZ; x++) {
          const index = 3 * (z * totalsegmentsX + x);
          this.currentZ[index].pos += this.currentZ[index].increment

          if (this.currentZ[index].pos > 2 * Math.PI) this.currentZ[index].pos = 0;

          let newZ
          if (this.currentZ[index].method == 0) newZ = this.sinZ(this.currentZ[index].pos, this.currentZ[index].amplitude)
          else if (this.currentZ[index].method == 1) newZ = this.cosZ(this.currentZ[index].pos, this.currentZ[index].amplitude)

          this.geometry.attributes.position.array[index + 1] = newZ
        }
      }

      this.terrain.rotation.y += Math.PI/2000

    });

    window.addEventListener("mousemove",(mouse)=>{
      if (!this.mouse.x || !this.mouse.y){
        this.mouse.x = mouse.x
        this.mouse.y = mouse.y
      }else{
        let xdiff = (this.mouse.x - mouse.x) * 0.03 * -1
        let ydiff = (this.mouse.y - mouse.y) * 0.03 * -1
        
        this.camera.position.x += xdiff
        this.camera.position.z += ydiff

        this.mouse.x = mouse.x
        this.mouse.y = mouse.y
      }
    })


    // for (let i = 2; i < geometry.mesh.geometry.attributes.position.array.length; i+=3){
    //   geometry.geometry.attributes.position.array[i] = Math.random()
    // }

    // geometry.geometry.attributes.position.needsUpdate = true;


    // console.log(geometry.mesh.geometry.attributes.position.array)

    // this.$refs['renderer'].onBeforeRender(() => {
    //   for (let i = 2; i < geometry.mesh.geometry.attributes.position.array.length; i+=3){
    //     geometry.mesh.geometry.attributes.position.array[i] = Math.random()
    //   }
    //   console.log("changed")
    // });


    // console.log(simplexNoise)

    // let octaves = 2
    // let persistence = 2
    // let frequency
    // let amplitude
    // let totalAmplitude
    // let noise
    // let width = 100
    // let height = 100
    
    // let nextZ = 0

    // for (var x = 0; x < width; x++) {
    //     for (var y = 0; y < height; y++) {
    //       noise = 0;
    //       frequency = 8;
    //       amplitude = 0.125;
    //       totalAmplitude = 1;
    //       for (var i = 0; i < octaves; i++) {
    //           noise += (simplexNoise.noise2D(x / frequency, y / frequency) / 2 + 0.5) * amplitude;
    //           totalAmplitude += amplitude;
    //           amplitude *= persistence;
    //           frequency *= (i === 0) ? 3 : 2;
    //       }
    //       noise /= totalAmplitude;
    //       geometry.mesh.geometry.attributes.position.array[nextZ] += (noise - 0.5) * 2;
    //       nextZ++
    //     }
    // }
  }
});
</script>

<style scoped>
</style>

