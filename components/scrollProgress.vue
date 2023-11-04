<template>
    <div class="fixed right-2 top-0 z-30">
        <div class="text-2xl text-white h-screen flex justify-center items-center ">
            <div class="h-[35%] w-2 rounded bg-gray-700">
                <div class="h-full bg-green-500 rounded" ref="progress"></div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'

const progress = ref(null)

onMounted(()=>{
    let height = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight
    progress.value.style.height = '0px'
    document.addEventListener("scroll",()=>{
        let current_height = document.documentElement.scrollTop || document.body.scrollTop
        progress.value.style.height = `${current_height / height * 100}%`
    })
})

</script>