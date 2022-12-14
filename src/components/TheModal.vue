<script setup>
import FavButton from './FavButton.vue';

const props = defineProps({
    modal: {
        type: Boolean
    },
    title:{
        type: String,
        default: 'Título por default'
    },
    description:{
        type: String,
        default: 'Sorry, no hay descripción 😥'
    },
    location:{
        type: String,
        default: 'Localización sin definir'
    },
    googlemap:{
        type: String,
        default: '#'
    },
    src: {
        type: String,
        default: '#'
    },
    locationPara: {
        type: String,
        default: 'Mira la localización exacta'
    },
    item: Number,
    closeModal: Function
})


const emit = defineEmits(['closeModal'])

</script>

<template>
    <div class="modal" :style="`display: ${props.modal ? 'flex' : 'none' }`">
        <div class="wrapper-img">
            <img :src="`/imgs/${src}`" alt="pic" width="600" height="400">
            <FavButton 
            :item="item"
            class="fav-button"
            />
        </div>
        <div class="wrapper-text">
            <h2 class="title">{{title}}</h2>
            <p class="description" v-html="description">

            </p>
            <p class="description">
                {{ locationPara }}
            </p>
            <a class="location" :href="googlemap" target="_blank"><v-icon name="oi-location" /> {{location}} </a>
        </div>
        <div class="btn-close" @click="emit('closeModal')">
            <v-icon name="io-close-outline" />
        </div>
    </div>
</template>

<style scoped>
.modal{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem;
    background-color: #fafafaf0;
    text-align: center;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    z-index: 10;
}


.modal .wrapper-img img{
    width: 100%;
    height: auto;
    background-color: #cacaca;
}

.modal .wrapper-img{
    position: relative;
    padding: 0;
    margin-top: 2rem;
}
.modal .wrapper-text{
    width: 100%;
    padding: 2rem 0;
    max-width: 1000px;
    margin: 0 auto;
    text-align: left;
}

.modal .title{
    color: #20335d;
    text-align: center;
    
}

.modal .description{
    line-height: 1.5;
    font-size: 1em;
    text-align: left;
    
}

.modal .location{
    display: inline-block;
    text-decoration: none;
    color: #42b882;
    font-weight: bold;
    text-align: left;
}
.modal .location:hover{
    border-bottom: 2px solid #42b882;
}

.fav-button{
    opacity: 1;
    position: absolute;
    right: 5%;
    top: 7.5%;
    cursor: pointer;
}
.btn-close{
    position: absolute;
    right: 2%;
}
@media screen and (min-width: 1300px){
    .modal{
        flex-direction: row;
    }
    .modal .wrapper-img img{
        height: 100%;
        width: auto;
        background-color: #cacaca;
    }
    .modal .wrapper-img{
        width: 100%;
        padding: 2rem;
        margin-top: 0;
    }
}
</style>
