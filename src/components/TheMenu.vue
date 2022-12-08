<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {useFavStore} from '@/stores/fav.js'
import {useBackgroundHomeStore} from '@/stores/isHome.js'
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

const useFav = useFavStore()
const {favs} = storeToRefs(useFav)

const useIsHome = useBackgroundHomeStore()
const {isHome} = storeToRefs(useIsHome)

const isDesktop = ref(false)

function favLength(){
  return favs.value.length
}

onMounted(()=> {
  isDesktop.value = window.screen.width > 992;
  window.addEventListener('resize', function(){
    if(window.screen.width > 992){
      isDesktop.value = true;
      return
    }
    isDesktop.value = false;
  })
})



</script>

<template>
    <div class="wrapper-menu">
        <nav class="menu">
        <RouterLink to="/" :class="{'link-home': isHome}"><v-icon name="hi-home" /> Incio</RouterLink>
        <RouterLink to="/collection" :class="{'link-home': isHome}"> <v-icon name="md-collections-outlined" /> Colección</RouterLink>
        <RouterLink to="/favs" :class="{'link-home': isHome}"><v-icon name="bi-heart" /> <span :class="{'hide': !isDesktop}"> Favoritos</span> <span class="fav-length" :class="favLength() ? '' : 'hide'">{{favLength()}}</span></RouterLink>
        </nav>
    </div>
</template>

<style scoped>

.menu{
  display: flex;
  gap: 1rem;
}

a{
  position: relative;
  color: #20335d;
  text-decoration: none;
}

.link-home{
  color: #fff;
}

.fav-length{
  position: absolute;
  top: -5px;
  left: 80%;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00b7ab;
  padding: 0.5rem;
  font-size: 0.5rem;
  color: #fff;
  width: 10px;
  height: 10px;
  border-radius: 50%
}

.hide{
  display: none;
}

@media screen and (min-width: 992px){
  .fav-length{
    left: 100%;
  }
}

</style>
