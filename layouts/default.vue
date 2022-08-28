<template>
  <div>
    <navbar/>
    <leftbar />
    <slot />
    <pageselect/>
    <footer_info :key="$route.path"/>
  </div>
</template>


