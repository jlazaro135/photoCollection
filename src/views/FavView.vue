<script setup>
import TheCollection from '@/components/TheCollection.vue'
import COLLECTION from '@/contentData/collection.js'
import TheContainer from '../components/TheContainer.vue';
</script>

<template>
    <TheContainer>
        <TheCollection 
        :collection="COLLECTION"
        :isCollection=false
        />
    </TheContainer>
</template>

<style scoped>
.container{
    max-width: 1400px;
    margin: 0 auto;
}
</style>