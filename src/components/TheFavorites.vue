<script setup>
import { RouterLink } from 'vue-router'
import TheCollection from '@/components/TheCollection.vue'
import TheContainer from '../components/TheContainer.vue';
import {useFavStore} from '@/stores/fav.js'
import { storeToRefs } from 'pinia';
import TheRandomButton from './TheRandomButton.vue';

const useFav = useFavStore()
const {favsObjects} = storeToRefs(useFav)
</script>

<template>
    <TheContainer :class="{'center': favsObjects.length <= 0}" class="text-center">
        <div v-if="favsObjects.length <= 0" class="empty-fav">
            <div class="wrapper-gif">
                <img src="https://media.tenor.com/9ud1r4sc-QQAAAAC/confused-john-travolta.gif" alt="">
            </div>
            <h2>No tienes ninguna imagen en favoritos </h2>
            <div class="text-search">
                <p>Mira en la <RouterLink to="/collection">colección</RouterLink> o bien consigue una al azar haciendo clic en el siguiente botón:</p>
                <TheRandomButton 
                textButton="¡Dame una foto!"
                />
            </div>
        </div>
        <TheCollection 
        v-if="favsObjects.length > 0"
        :favorites="favsObjects" 
        :isCollection=false
        />
        <TheRandomButton 
        v-if="favsObjects.length > 0"
        textButton="¡Dame otra foto!"
        />
    </TheContainer>
</template>

<style scoped>
.center{
    margin: auto
}

.text-center{
    text-align: center;
}
.empty-fav{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
}

.empty-fav h2{
    font-size: clamp(20px, 2vw, 50px);
    text-align: center;
}

.wrapper-gif{
    max-width: 80%;
}

.wrapper-gif img{
    width: 100%;
}

.text-search{
    text-align: center;
}
</style>