<script setup>
import TheFilter from './TheFilter.vue';
import TheFigure from './TheFigure.vue';
import TheModal from './TheModal.vue';
import { ref, computed } from 'vue';

const isOpened = ref(false)
const filterText = ref('')

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

const props = defineProps({
    collection: Array,
    favorites: Array,
    isCollection: Boolean
})

const {collection, favorites, isCollection} = props

const textInput = (data) => {
    filterText.value = data;
};

const filteredImg = computed(() => {
  return collection.filter(item => {
    return item.title.toLowerCase().includes(filterText.value.toLowerCase()) || item.description.toLowerCase().includes(filterText.value.toLowerCase()) || item.location.toLowerCase().includes(filterText.value.toLowerCase());
  });
});

</script>

<template>
    <TheFilter 
    @data-emitted="textInput"
    />
    <div class="wrapper-collection">
        <TheFigure 
        v-for="item in isCollection ? filteredImg : favorites"
        :key="item.id + Math.random()"
        :title="item.title"
        :src="item.src"
        :alt="item.alt"
        :location="item.location"
        :item="item.id"
        @openModal="openModal(item)"
        />
    </div>
    <h2 v-if="filteredImg.length === 0"> No hay resultados para tu búsqueda :(</h2>
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

h2{
    text-align: center;
}
</style>
