<template>
  <Renderer ref="renderer" orbit-ctrl resize="window">
    <Camera :position="{ x: 10, y: 10, z: 10 }" />
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
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import SimplexNoise from "simplex-noise";
import * as THREE from 'three';

export default defineComponent({
  setup() {},
  name: "terrain",
  mounted() {

    const segmentsX = 15;
    const segmentsZ = 15;
    const sizeX = 15 * segmentsX;
    const sizeZ = 15 * segmentsZ;
    const geometry = new THREE.PlaneBufferGeometry(sizeX, sizeZ, segmentsX, segmentsZ);

    geometry.rotateX(Math.PI * -0.5);

    const material = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      wireframe: true,
    });

    const terrain = new THREE.Mesh(geometry, material);

    this.$refs['scene'].add(terrain)

    const totalSegmentsX = segmentsX + 1;
    const totalSegmentsZ = segmentsZ + 1;

    for(let z = 0; z < totalSegmentsZ; z++) {
      for(let x = 0; x < totalSegmentsX; x++) {
        const index = 3 * (z * totalSegmentsX + x);
        geometry.attributes.position.array[index + 1] = Math.random() * 10;
      }
    }

    geometry.attributes.position.needsUpdate = true;

    let simplexNoise = new SimplexNoise()

    this.$refs['renderer'].onBeforeRender(() => {
      geometry.attributes.position.needsUpdate = true;

      for(let z = 0; z < totalSegmentsZ; z++) {
        for(let x = 0; x < totalSegmentsX; x++) {
          const index = 3 * (z * totalSegmentsX + x);
          
          if (Math.round(Math.random()) == 1){
            geometry.attributes.position.array[index + 1] += 0.05
          }else{
            geometry.attributes.position.array[index + 1] -= 0.05
          }

        }
      }

    });


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

