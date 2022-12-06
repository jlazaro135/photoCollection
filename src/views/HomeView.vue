<script setup>
import { RouterLink} from 'vue-router'

import {useBackgroundHomeStore} from '@/stores/isHome.js'
import {onMounted, onUnmounted} from 'vue';
import { storeToRefs } from 'pinia';


const useIsHome = useBackgroundHomeStore();
const {isHome} = storeToRefs(useIsHome);

onMounted(() => isHome.value = true)
onUnmounted(() => isHome.value = false)
</script>

<template>
    <div class="wrapper-home">
        <h1>FRONTEND BACKPACKER</h1>
        <p>
            Bienvenido/a a este espacio personal dedicado a compartir mi visión particular del mundo a través de la fotografía. 
            Mi nombre es Jesús, soy desarrollador web y este proyecto nace con el principal objetivo de seguir mejorando mis habilidades como <b>desarrollador "front end"</b>. 
            Aprovechando mi afición a la fotografía, decidí crear este lugar para compartir de una forma cercana e íntima lugares, experiencias y momentos especiales, todos ellos retratados con mi inseparable compañera de viaje: <b>mi cámara Nikkon D3200</b>
        </p>
        <RouterLink to="/collection"> Ver Colección</RouterLink>
    </div>
</template>

<style scoped>

.wrapper-home{
    margin: auto;
    text-align: center;
    max-width: 1000px;
    padding: 1.5rem;
    color: #ffffff;
    border: 1px solid #fff;
    width: 90%;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(3px);
}


h1{
    margin: 0 auto;
    text-align: center;
    font-size: clamp(24px, 2.5vw, 50px);
}
p{
    text-align: center;
    line-height: 1.5;
    font-size: 1.2rem;
    font-size: clamp(16px, 1.2vw, 28px);
}

a{
    display: inline-block;
    text-decoration: none;
    background-color: #42b882;
    color: #fff;
    font-size: 1.5rem;
    padding: 0.5em 1em;
    border-radius: 5px;
}

a:hover{
    background-color: #1b8b59;
    transition: all 0.3s ease-in-out;
}

@media screen and (min-width: 600px){
    .wrapper-img{
    max-height: 400px;
    }
}

@media screen and (min-width: 900px){
    img{
        transform: translateY(-15%);
    }
    .wrapper-img{
    max-height: 500px;
    }
}

</style>