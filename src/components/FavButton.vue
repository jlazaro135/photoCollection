<script setup>
import { ref } from 'vue';
import {useFavStore} from '@/stores/fav.js'
import { storeToRefs } from 'pinia';
import COLLECTION from '@/contentData/collection.js'

const useFav = useFavStore()
const {favs, favsObjects} = storeToRefs(useFav)

const props = defineProps({
    item: Number
})

const itemFaved = ref(null)

function toggleFav(e){
    e.stopPropagation()
    itemFaved.value = favs.value.find(value => value === props.item)
    if(itemFaved.value){
        let index = favs.value.indexOf(props.item)
        favs.value.splice(index, 1)
        let indexObject = favsObjects.value.indexOf(favsObjects.value.find(obj => obj['id'] === props.item))
        favsObjects.value.splice(indexObject, 1)
        return
    }
    favs.value = [...favs.value, props.item]
    favsObjects.value = [...favsObjects.value, COLLECTION.find(obj => obj['id'] === props.item)]
}

function isFav(){
    return favs.value.find(value => value === props.item)
}

</script>

<template>
    <div class="fav-button" :class="{'faved': isFav()}" @click="toggleFav($event)" :data-item="item">
        <v-icon class="fav-icon" :class="{'red': isFav()}" :name="isFav() ? 'bi-heart-fill' : 'bi-heart'" />
    </div>
</template>

<style scoped>

.fav-button{
    position: absolute;
    bottom: auto;
    left: auto;
    top: 5%;
    right: 3%;
    padding: 0.5em;
    background-color: #fafafa;
    border-radius: 5px;
    cursor: pointer;
}

.fav-icon{
    color: #000;
}
.red{
    color: #ff0000;
}

@media screen and (min-width: 1024px){
    .fav-button{
        opacity: 0;
    }
}

.faved{
    opacity: 1;
}
</style>
