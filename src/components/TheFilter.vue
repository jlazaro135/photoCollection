<script setup>

import { defineEmits, ref } from 'vue';

const filterImg = ref('');
const emit = defineEmits(['data-emitted']);

const sendData = () => {
  emit('data-emitted', filterImg.value);
};

</script>

<template>
    <div class="input-wrapper">
        <input type="text" placeholder="busca una imagen..." maxlength="15" 
        v-model="filterImg"
        @input="sendData"
        >
    </div>
</template>

<style scoped>
    .input-wrapper{
        padding: 0.5rem;
        margin-top: 1rem;
    }
    input{
        display: inline-block;
        padding: 0.5rem;
    }
    input:focus{
        outline-color: #01b7aa;
    }
</style>