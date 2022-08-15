<template>
    <div class="z-20 relative">
        <div>
            <img class="logo" :src="`../assets/images/skills/${img_name}.png`"/>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        img_name: {
            default: null,
            type: String
        }
    }
}

</script>

<style scope>
.logo{
    height: 50px;
    width: 50px;
}
</style>