<template>
  <div>
    <loading />
    <Landing />
    <About />
    <Experience />
  </div>
</template>

<script>
export default {
  name: "index",
  head() {
    return {
      htmlAttrs: {
        lang: 'en'
      },
      title: "Youwei Zhen",
      meta: [
        { name: "description", content: "Youwei Zhen - Programmer | HS Student" },
      ]
    }
  }
}
</script>

