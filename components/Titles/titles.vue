<template>
    <div class="z-50 relative bg-transparent overflow-x-hidden" id="titles">
        <Appellation title="Web Developer" :stroke="true" direction="left"/>
        <Appellation title="ML/AI Enthusiast" direction="right"/>
        <Appellation title="Competitive Programming" :stroke="true" direction="left"/>
    </div>
</template>

<script setup>
import Appellation from "./Appellation.vue"
</script>