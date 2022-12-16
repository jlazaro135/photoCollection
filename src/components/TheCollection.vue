<script setup>
import TheFigure from './TheFigure.vue';
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


defineProps({
    collection: Array,
    favorites: Array,
    isCollection: Boolean
})

</script>

<template>
    <div class="wrapper-collection">
        <TheFigure 
        v-for="item in isCollection ? collection : favorites"
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
    :googlemap="data.googlemap"
    @closeModal="closeModal"
    />
</template>

<style scoped>
.wrapper-collection{
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem 0;
}


@media screen and (min-width: 500px){
    .wrapper-collection{
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    padding: 1rem 0.5rem;
    }
}


</style>
