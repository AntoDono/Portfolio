<template>
  <Renderer ref="renderer" orbit-ctrl resize="window">
    <Camera :position="{ x: 100, y: 100, z: 100 }" />
    <Scene>
      <PointLight :position="{ x: 25, y: 25, z: 25 }" />
      <Plane
        :position="{ x: 0, y: 0, z: 0 }"
        :width="100"
        :height="100"
        :widthSegments="100"
        :heightSegments="100"
        ref="plane"
      >
        <BasicMaterial color="#1895dc" />
      </Plane>
    </Scene>
  </Renderer>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import SimplexNoise from 'simplex-noise';

export default defineComponent({
  setup() {},
  name: "terrain",
  mounted() {
    this.$refs['plane'].material.wireframe = true

    let geometry = this.$refs['plane']

    console.log(geometry.mesh.geometry.attributes.position.array)

    let simplexNoise = new SimplexNoise()
    let octaves = 2
    let persistence = 2
    let frequency
    let amplitude
    let totalAmplitude
    let noise
    let width = 100
    let height = 100

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
            geometry.mesh.geometry.attributes.position.array[x + y * width].z += (noise - 0.5) * 2;
        }
    }
  }
});
</script>

<style scoped>
</style>

