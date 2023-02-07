<template>
    <div class="z-20 relative bg-primary pt-10 pb-10 overflow-x-hidden">
        <titles class="pt-48 pb-48"/>
        <div class="flex justify-center items-center">
            <div class="w-[80vw] max-w-[1920px]">
                <sectionHeader text="About Me"/>
                <introduction/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About",
    }
</script>

<!-- 
<div class="z-20 relative bg-primary flex justify-center">
            <div class="max-w-[1300px] flex flex-col items-start justify-start">
            <Titles class="pl-40" />
            <sectionHeader text="About Me" class="p-10"/>
            <introduction class="p-10" />
            <Skills class="p-10" />
        </div> -->