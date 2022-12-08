<script setup>
import COLLECTION from '@/contentData/collection.js'
import {getRandomInt} from '@/utils/utils.js'
import { ref } from 'vue';
import TheModal from './TheModal.vue';
import {useFavStore} from '@/stores/fav.js'
import { storeToRefs } from 'pinia';

const useFav = useFavStore()
const {favsObjects, favs} = storeToRefs(useFav)

defineProps({
    collection: Array,
    favorites: Array,
    isCollection: Boolean,
    textButton: String
})

const randomImg = ref({})

const isOpened = ref(false)

function openModal(item){
    isOpened.value = true
    randomImg.value = item
    let body = document.body
    body.style.overflowY = 'hidden'
    body.style.paddingRight = '17px'
}

function closeModal(){
    isOpened.value = false
    let body = document.body
    body.removeAttribute('style')
}

function getRandomPicture(){
    let collectionFiltered = filterFav(COLLECTION)
    let randomId = randomItem(collectionFiltered)
    return randomImg.value = collectionFiltered.find(obj => obj['id'] === randomId)
}

function filterFav(arr){
    return arr.filter(item => !favs.value.includes(item.id))
}

function randomItem(items){
    console.log(items) 
    console.log(items[Math.floor(Math.random()*items.length)].id) 
    return items[Math.floor(Math.random()*items.length)].id
}

</script>

<template>
    <button @click="openModal(getRandomPicture())">{{textButton}}</button>
    <TheModal
    :modal="isOpened"
    :title="randomImg.title"
    :description="randomImg.description"
    :src="randomImg.src"
    :location="randomImg.location"
    :item="randomImg.id"
    @closeModal="closeModal"
    />
</template>

<style scoped>
button{
    display: inline-block;
    text-decoration: none;
    background-color: #42b882;
    color: #fff;
    font-size: 1.5rem;
    padding: 0.5em 1em;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    margin: 2rem 0;
}

button:hover{
    background-color: #1b8b59;
    transition: all 0.3s ease-in-out;
}
</style>