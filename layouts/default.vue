<template>
  <div>
    <navbar/>
    <leftbar />
    <Nuxt />
    <pageselect/>
    <footer_info :key="this.$route.path"/>
  </div>
</template>


<script>

  import navbar from "../components/navbar.vue"
  import leftbar from "../components/leftbar.vue"
  import footer_info from "../components/footer_info.vue"

  export default{
    components: {
      navbar,
      leftbar,
      footer_info
    }
  }
</script>