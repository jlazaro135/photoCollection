<script setup>
import { ref } from 'vue';
import {useFavStore} from '@/stores/fav.js'
import { storeToRefs } from 'pinia';

const useFav = useFavStore()
const {favs} = storeToRefs(useFav)

const props = defineProps({
    item: Number
})

const favArr = ref(null)

function toggleFav(e){
    e.stopPropagation()
    favArr.value = favs.value.find(value => value === props.item)
    if(favArr.value){
        let index = favs.value.indexOf(props.item)
        favs.value.splice(index, 1)
        return
    }
    favs.value = [...favs.value, props.item]
}

function isFav(){
    return favs.value.find(value => value === props.item)
}

</script>

<template>
        <div class="fav-button" @click="toggleFav($event)" :data-item="item">
            <v-icon class="fav-icon" :class="isFav() ? 'red' : ''" :name="isFav() ? 'bi-heart-fill' : 'bi-heart'" />
        </div>
</template>

<style scoped>

.fav-button{
    opacity: 0;
    position: absolute;
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
.red{
    color: #ff0000;
}

</style>
