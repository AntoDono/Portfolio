<template>
    <div class="flex justify-center items-center">
        <h2 class="text-highlight overflow-y-hidden overflow-x-hidden text-center gradient-text-heading" :style="{fontSize: size}">
            {{ text }}
        </h2>
    </div>
</template>

<script>

export default {
    name: "glitch",
    props: {
        text: {
            type: String,
            default: "Gradient text"
        },
        size: {
            type: String,
            default: "25vmin"
        }
    }
}

</script>

<style scoped>
.gradient-text-heading {
    font-weight: 700;
    text-transform: uppercase;
    position: relative;
}
</style>