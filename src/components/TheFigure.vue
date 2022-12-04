<script setup>


defineProps({
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
        default: 'blabaaa'
    },
    alt: {
        type: String,
        default: 'Sin alt'
    },
})


</script>

<template>
    <figure>
        <img :src="`../src/assets/imgs/${src}`" loading="lazy" width="600" height="400" alt="alt">
        <figcaption> {{ title }} </figcaption>
        <span class="location"><v-icon name="oi-location" /> {{ location }} </span>
        <div class="fav-button">
            <v-icon class="fav-icon" name="bi-heart" />
        </div>
    </figure>
</template>

<style scoped>

img{
    width: 100%;
    height: 100%;
}

figure{
    position: relative;
    margin: 0;
    cursor: zoom-in;
    background-color: #cacaca;
}

figcaption, .fav-button, .location{
    opacity: 0;
    position: absolute;
    bottom: 5%;
    left: 3%;
    color: #fff;
    cursor: pointer;
}

.location{
    left: auto;
    right: 3%;
}
.fav-button{
    bottom: auto;
    left: auto;
    top: 5%;
    right: 3%;
    padding: 0.5em;
    background-color: #fafafa;
    border-radius: 5px;
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

</style>
