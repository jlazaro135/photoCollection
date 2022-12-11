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
        <h1>DETRÁS DEL OBJETIVO</h1>
        <p>
            Bienvenido/a a este espacio personal dedicado a compartir mi visión particular del mundo a través de la fotografía. 
            Mi nombre es Jesús, soy desarrollador web y este proyecto nace con el principal objetivo de seguir mejorando mis habilidades como <b><u>desarrollador "front end"</u></b>. 
            Aprovechando mi afición a la fotografía, decidí crear este lugar para compartir de una forma cercana e íntima lugares, experiencias y momentos especiales, todos ellos retratados con mi inseparable compañera de viaje: <b><u>mi cámara Nikkon D3200</u></b>
        </p>
        <RouterLink to="/collection"> Ver Colección</RouterLink>
    </div>
</template>

<style scoped>

.wrapper-home{
    margin: auto;
    text-align: center;
    overflow: hidden;
    max-height: 0;
    max-width: 1000px;
    padding: 0;
    color: #ffffff;
    border: 1px solid #fff;
    width: 90%;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(3px);
    animation: wrapper 1s ease-in-out forwards;
    animation-delay: 1s;
}


h1{
    opacity: 0;
    margin: 0 auto;
    text-align: center;
    font-size: clamp(24px, 2.5vw, 50px);
    animation: opacity 1s ease-out forwards;
    animation-delay: 1.5s;
}
p{
    opacity: 0;
    text-align: center;
    line-height: 1.5;
    font-size: 1.2rem;
    font-size: clamp(16px, 1.2vw, 28px);
    animation: opacity 1s ease-out forwards;
    animation-delay: 1.5s;
}

a{
    opacity: 0;
    display: inline-block;
    text-decoration: none;
    background-color: #42b882;
    color: #fff;
    font-size: 1.5rem;
    padding: 0.5em 1em;
    position: relative;
    animation: opacity 1s ease-out forwards;
    animation-delay: 1.5s;
}

a:hover:before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff41;
    transition: all 0.3s ease-in-out;
    animation: button 0.5s ease-in-out forwards;
}

@keyframes button{
    from {width: 0;}
    to {width: 100%;}
}

@keyframes opacity{
    from{opacity: 0;}
    to{opacity: 1;}
}

@keyframes wrapper{
    0%{
        max-height: 0;
        padding: 0;
    }
    25%{
        padding: 1.5rem;
    }
    100%{
        padding: 1.5rem;
        max-height: 1000px;
    }
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