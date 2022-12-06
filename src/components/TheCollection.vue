<script setup>
import TheFigure from './TheFigure.vue';
import COLLECTION from '@/contentData/collection.js'
import TheModal from './TheModal.vue';
import { ref } from 'vue';

const isOpened = ref(false)

const data = ref({})

function openModal(item){
    isOpened.value = true
    data.value = item
    let body = document.body
    body.style.overflowY = 'hidden'
    body.style.paddingRight = '17px'
}

function closeModal(){
    isOpened.value = false
    let body = document.body
    body.removeAttribute('style')
}

</script>

<template>
    <div class="wrapper-collection">
        <TheFigure 
        v-for="item in COLLECTION"
        :key="item.id"
        :title="item.title"
        :src="item.src"
        :alt="item.alt"
        :location="item.location"
        :item="item.id"
        @openModal="openModal(item)" 
        />
    </div>
    <TheModal
    :modal="isOpened"
    :title="data.title"
    :description="data.description"
    :src="data.src"
    :location="data.location"
    :item="data.id"
    @closeModal="closeModal"
    />
</template>

<style scoped>
.wrapper-collection{
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}


@media screen and (min-width: 500px){
    .wrapper-collection{
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    padding: 1rem;
    }
}

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
}

.modal .title{
    color: #20335d;
    
}

.modal .description{
    line-height: 1.5;
    font-size: 1em;
    
}

.modal .location{
    display: inline-block;
    text-decoration: none;
    color: #42b882;
    font-weight: bold;
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
