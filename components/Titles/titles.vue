<template>
    <div class="z-50 bg-transparent overflow-x-hidden" id="titles">
        <Appellation title="Fullstack Developer" :stroke="true" direction="left"/>
        <Appellation title="Artificial Intelligence" direction="right"/>
        <Appellation title="Machine Learning" :stroke="true" direction="left"/>
    </div>
</template>

<script setup>
import Appellation from "./Appellation.vue"
</script>