<script setup>
import { RouterView } from 'vue-router'
import {useBackgroundHomeStore} from '@/stores/isHome.js'
import TheMenu from './components/TheMenu.vue';

const useIsHome = useBackgroundHomeStore()


</script>

<template>
  <div class="wrapper" :class="{'back-img': useIsHome.isHome}" >
    <div class="container">
      <header>
        <img alt="Vue logo" class="logo" src="@/assets/jlr.webp" width="125" />
        <TheMenu />
      </header>
    </div>
  <RouterView />
  </div>
</template>

<style scoped>
.container{
  max-width: 1400px;
  margin: 0 auto;
  width: 100%
}
.wrapper{
  display: flex;
  flex-direction: column;
  min-height: 100vh;

}

.back-img{
  background-image: linear-gradient(180deg, rgba(5, 5, 5, 0.1) 25%, rgba(3, 3, 3, 0.5) 40%, rgba(3, 3, 3, 0.8) 100%), url('@/assets/imgs/lanzarote/lz-12.webp');
  background-size: cover;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

</style>
