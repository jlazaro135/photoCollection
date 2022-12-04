<script setup>
import { ref } from 'vue';

defineProps({
    item: Number
})

const fav = ref(false)

function toggleFav(){
    if (fav.value){
        fav.value = false
        return
    }
    fav.value = true
}

</script>

<template>
        <div class="fav-button" @click="toggleFav" :data-item="item">
            <v-icon class="fav-icon" :class="fav ? 'red' : ''" :name="fav ? 'bi-heart-fill' : 'bi-heart'" />
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
