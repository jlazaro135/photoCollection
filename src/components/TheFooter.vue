<script setup>
import TheContainer from './TheContainer.vue';
import {useBackgroundHomeStore} from '@/stores/isHome.js'
import { storeToRefs } from 'pinia';

const useIsHome = useBackgroundHomeStore()
const {isHome} = storeToRefs(useIsHome)
</script>

<template>
    <TheContainer>
        <footer class="footer" :class="{'link-home': isHome}">
            <span>Creado con vue 3 por <a href="https://www.linkedin.com/in/jlazaro135/" class="link" :class="{'link-footer': isHome}">Jesús Lázaro</a></span> <img src="@/assets/logo.svg" alt="" width="35" height="35">
        </footer>
    </TheContainer>
</template>

<style scoped>
.footer{
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem
}
.link-home{
  color: white;
}

img{
    filter: drop-shadow(0 0 8px #000000);
    animation: shadow 1.5s linear infinite;
}

.link{
    color: #42b882;
}
.link-footer{
    color: #42b882;
}
@keyframes shadow{
    0%{
        filter: drop-shadow(0 0 8px #000000);
    }
    50%{
        filter: drop-shadow(0 0 5px #005e57);
    }
    100%{
        filter: drop-shadow(0 0 8px #000000);
    }
}
</style>
