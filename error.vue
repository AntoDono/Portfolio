<template>
  <NuxtLayout>
    <div class="w-full h-[90vh] bg-primary flex flex-col justify-center items-center">
      <h1 class="text-white font-bogart text-[5vmin]">Oops, page is not found!</h1>
      <navigatebutton text="Go Back" />
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  layout: 'default', // you can set a custom layout for the error page
  head() {
    return {
      htmlAttrs: {
        lang: 'en'
      },
      title: "Page Not Found",
      meta: [
        { name: "description", content: "Page Not Found" },
      ]
    }
  }
}
</script>