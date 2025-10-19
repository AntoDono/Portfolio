<template>
    <section class="z-20 relative bg-primary pt-10 pb-10 overflow-x-hidden" aria-labelledby="about-heading">
        <div class="flex justify-center items-center pt-10" id="about">
            <div class="w-[80vw]">
                <h2 id="about-heading" class="sr-only">About Me</h2>
                <sectionHeader text="About Me" class="pb-10"/>
                <Introduction />
            </div>
        </div>
    </section>
</template>

<script setup>
import Introduction from "./Introduction.vue";
</script>