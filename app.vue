<template>
  <div>
    <NuxtLayout>
        <NuxtPage :key="$route.path">
            <router-view :key="$route.path"/>
        </NuxtPage>
    </NuxtLayout>
  </div>
</template>