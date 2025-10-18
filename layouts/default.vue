<template>
  <div class="overflow-x-hidden">
    <ClientOnly>
      <navbar/>
      <leftbar />
    </ClientOnly>
    <slot/>
    <ClientOnly>
      <pageselect :route="$route.path"/>
      <footer_info/>
    </ClientOnly>
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