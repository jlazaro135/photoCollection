<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {useBackgroundHomeStore} from '@/stores/isHome.js'

const useIsHome = useBackgroundHomeStore()


</script>

<template>
  <div class="wrapper" :class="{'back-img': useIsHome.isHome}" >
    <div class="container">
      <header>
        <img alt="Vue logo" class="logo" src="@/assets/jlr.webp" width="125" />

        <div class="wrapper-menu">
          <nav class="menu">
            <RouterLink to="/"><v-icon name="hi-home" /> Incio</RouterLink>
            <RouterLink to="/collection"> <v-icon name="md-collections-outlined" /> Colección</RouterLink>
            <RouterLink to="/favs"><v-icon name="bi-heart" /> Favoritos</RouterLink>
          </nav>
        </div>
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

.menu{
  display: flex;
  gap: 1rem;
}

a{
  color: #20335d;
  text-decoration: none;
}
</style>
