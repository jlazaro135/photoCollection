<script setup>
import FavButton from './FavButton.vue';

const props = defineProps({
    title: {
        type: String,
        default: 'LOREM IPSUM'
    },
    location: {
        type: String,
        default: 'Localización, Worlwide'
    },
    src: {
        type: String,
    },
    alt: {
        type: String,
        default: 'Sin alt'
    },
    item: Number
})


const emit = defineEmits(['openModal', 'favPic'])

</script>

<template>
    <figure @click="emit('openModal', 'item')" :item="item">
        <img :src="`../src/assets/imgs/${src}`" loading="lazy" width="600" height="400" alt="alt">
        <figcaption> {{ title }} </figcaption>
        <span class="location"><v-icon name="oi-location" /> {{ location }} </span>
        <FavButton 
        :item="item"
        />
    </figure>
</template>

<style scoped>

img{
    width: 100%;
    height: 100%;
}

figure{
    user-select: none;
    position: relative;
    margin: 0;
    cursor: zoom-in;
    background-color: #cacaca;
}

figcaption, .location{
    opacity: 1;
    position: absolute;
    bottom: 5%;
    left: 3%;
    color: #fff;
    cursor: pointer;
    background-color: #00000030;
    padding: 0.2rem;
}

.location{
    left: auto;
    right: 3%;
}
.fav-icon{
    color: #000;
}

figure:hover{
    background-color: #000;
}

figure:hover > img{
    opacity: 0.6;
}

figure:hover > figcaption, figure:hover > .fav-button, figure:hover > .location{
    opacity: 1;
}

@media screen and (min-width: 1024px){
    figcaption, .location{
        opacity: 0;
        background-color: transparent;
        padding: 0;
    }
}

</style>
