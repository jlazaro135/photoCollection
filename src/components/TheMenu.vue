<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import {useFavStore} from '@/stores/fav.js'
import { storeToRefs } from 'pinia';

const useFav = useFavStore()
const {favs} = storeToRefs(useFav)



function favLength(){
  return favs.value.length
}

</script>

<template>
    <div class="wrapper-menu">
        <nav class="menu">
        <RouterLink to="/"><v-icon name="hi-home" /> Incio</RouterLink>
        <RouterLink to="/collection"> <v-icon name="md-collections-outlined" /> Colección</RouterLink>
        <RouterLink to="/favs"><v-icon name="bi-heart" /> Favoritos <span class="fav-length" :class="favLength() ? '' : 'hide'">{{favLength()}}</span></RouterLink>
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

.fav-length{
  position: absolute;
  top: -5px;
  left: 100%;
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
</style>
