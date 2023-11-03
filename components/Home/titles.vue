<template>
    <div class="z-50 relative bg-transparent" id="titles">
        <Appellation title="Web Developer" :stroke="true" direction="left"/>
        <Appellation title="ML/AI Enthusiast" direction="right"/>
        <Appellation title="Competitive Programming" :stroke="true" direction="left"/>
    </div>
</template>

<script>
import Appellation from "./Appellation.vue"

export default{
    name: "titles"
}

</script>