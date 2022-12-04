<script setup>
import { RouterLink} from 'vue-router'
</script>

<template>
    <div class="wrapper-img">
        <img src="@/assets/imgs/lanzarote/lz-12.webp" width="600" height="400" alt="background">
    </div>
    <div class="wrapper-home">
        <h1>Colección de memorias gráficas</h1>
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
    margin: 2em auto;
    text-align: center;
    max-width: 1000px;
    padding: 0 1rem;
}
.wrapper-img{
    max-height: 230px;
    overflow: hidden;
    position: relative;
    background-color: #cacaca;
}
.wrapper-img:before{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: rgb(87,87,87);
    background: linear-gradient(90deg, rgba(87,87,87,0.7) 0%, rgba(115,115,115,0.3) 50%, rgba(87,87,87,0.7) 100%);
    z-index: 1;
}
img{
    width: 100%;
    height: auto;
}
h1{
    margin: 0 auto;
    text-align: center
}
p{
    text-align: center;
    line-height: 1.5;
    font-size: 1.2rem;
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