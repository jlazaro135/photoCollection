import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useFavStore = defineStore('fav', () => {
  const favs = ref([])
  const favsObjects = ref([])

  favs.value = Array.from(JSON.parse(localStorage.getItem('photoIds')))
  favsObjects.value = Array.from(JSON.parse(localStorage.getItem('photoObjects')))


  return { 
    favs,
    favsObjects  
  }
})
