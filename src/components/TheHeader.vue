<script setup>
import TheMenu from './TheMenu.vue';
import {useBackgroundHomeStore} from '@/stores/isHome.js'
import { storeToRefs } from 'pinia';
import TheContainer from './TheContainer.vue';

const useIsHome = useBackgroundHomeStore()
const {isHome} = storeToRefs(useIsHome)

</script>

<template>
    <header class="header" :class="{'header-transparent': isHome}">
        <TheContainer class="header">
            <img alt="Vue logo" class="logo" :class="{'logo-white': isHome}" src="@/assets/jlr.webp" width="125" />
            <TheMenu/>
        </TheContainer>
    </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
}

header{
    background-color: rgb(229 255 253);
    position: sticky;
    top: 0;
    z-index: 9;
}

.header-transparent{
    background-color: transparent;
}

.logo-white{
    filter: brightness(0) invert(1);
}
</style>
