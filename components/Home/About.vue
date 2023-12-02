<template>
    <div class="z-20 relative bg-primary pt-10 pb-10 overflow-x-hidden">
        <Titles class="pt-48 pb-48" />
        <div class="flex justify-center items-center pt-10" id="about">
            <div class="w-[80vw] max-w-[1920px]">
                <sectionHeader text="About Me" class="pb-10"/>
                <Introduction />
            </div>
        </div>
    </div>
</template>

<script setup>
import Titles from "./titles.vue"
import Introduction from "./Introduction.vue";
</script>