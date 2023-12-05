<template>
    <div class="z-20 relative bg-primary pt-10 pb-10 overflow-x-hidden">
        <div class="flex justify-center items-center pt-10" id="about">
            <div class="w-[80vw]">
                <sectionHeader text="About Me" class="pb-10"/>
                <Introduction />
            </div>
        </div>
    </div>
</template>

<script setup>
import Introduction from "./Introduction.vue";
</script>