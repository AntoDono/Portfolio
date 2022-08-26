<template>
  <div>
    <NuxtLayout>
        <NuxtPage>
            <router-view :key="$route.path"/>
        </NuxtPage>
    </NuxtLayout>
  </div>
</template>