<template>
  <div>
    <navbar/>
    <leftbar />
    <slot/>
    <pageselect :route="$route.path"/>
    <footer_info/>
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