<template>
    <div class="border">
        <nuxt-link :href="destination" target="_blank">
            <img class="social" :src="url" :alt="image"/>
        </nuxt-link>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
    props:{
        image: {
            type: String,
            default: "/"
        },
        destination: {
            type: String,
            default: "/"
        }
    },
    data(){
        return {
            url: "/"
        }
    },
    mounted(){
        this.url = new URL(`../assets/images/${this.image}`, import.meta.url).href
    },
    name: "socialMedia"
})
</script>

<style scoped>
.social{
    height: 2rem;
    filter: grayscale(100%);
    transition: all ease 0.2s;
}

.social:hover{
    filter: grayscale(0%);
    transform: translateY(-10px);
    cursor: pointer;
}

</style>