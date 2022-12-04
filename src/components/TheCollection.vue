<script setup>
import TheFigure from './TheFigure.vue';
import COLLECTION from '@/contentData/collection.js'

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
        />
    </div>
    <div class="modal">
        <div class="wrapper-img">
            <img src="@/assets/imgs/lanzarote/lz-1.webp" alt="">
        </div>
        <div class="wrapper-text">
            <h2>Título por defecto</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio enim excepturi 
                facere voluptas nam natus nihil cum quam neque quisquam odio nulla impedit, ex modi laborum cumque quo nostrum repellat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio enim excepturi 
                facere voluptas nam natus nihil cum quam neque quisquam odio nulla impedit, ex modi laborum cumque quo nostrum repellat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio enim excepturi 
                facere voluptas nam natus nihil cum quam neque quisquam odio nulla impedit, ex modi laborum cumque quo nostrum repellat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio enim excepturi 
                facere voluptas nam natus nihil cum quam neque quisquam odio nulla impedit, ex modi laborum cumque quo nostrum repellat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio enim excepturi 
                facere voluptas nam natus nihil cum quam neque quisquam odio nulla impedit, ex modi laborum cumque quo nostrum repellat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio enim excepturi 
                facere voluptas nam natus nihil cum quam neque quisquam odio nulla impedit, ex modi laborum cumque quo nostrum repellat.
            </p>
            <span class="location">LOCALIZACIÓN</span>
        </div>
    </div>
</template>

<style scoped>
.wrapper-collection{
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
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
}

.modal .wrapper-img img{
    width: 100vh;
    max-width: 100%;
    height: auto;
}

.modal .wrapper-img{
    width: 100%;
}
.modal .wrapper-text{
    width: 100%;
    padding: 1rem;
    max-width: 1000px;
    margin: 0 auto;
}

@media screen and (min-width: 500px){
    .wrapper-collection{
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    padding: 1rem;
    }
}

</style>
