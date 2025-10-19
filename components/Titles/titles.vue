<template>
    <section class="z-50 bg-transparent overflow-x-hidden" id="titles" aria-labelledby="roles-and-skills">
        <h2 class="sr-only">Roles and Skills</h2>
        <Appellation title="Fullstack Developer" :stroke="true" direction="left"/>
        <Appellation title="Artificial Intelligence" direction="right"/>
        <Appellation title="Machine Learning" :stroke="true" direction="left"/>
    </section>
</template>

<script setup>
import Appellation from "./Appellation.vue"
</script>