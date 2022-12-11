<script setup>
import { RouterView } from 'vue-router'
import {useBackgroundHomeStore} from '@/stores/isHome.js'
import TheHeader from './components/TheHeader.vue';
import { storeToRefs } from 'pinia';
import TheFooter from './components/TheFooter.vue';

const useIsHome = useBackgroundHomeStore()
const {isHome} = storeToRefs(useIsHome)


</script>

<template>
  <div class="wrapper" :class="{'back-img': isHome}" >
  <TheHeader />
  <RouterView />
  <TheFooter />
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

.footer span{
  color: white;
}
</style>
