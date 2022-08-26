<template>
  <div>
    <leftbar />
    <slot />
    <pageselect/>
    <footer_info :key="$route.path"/>
  </div>
</template>


