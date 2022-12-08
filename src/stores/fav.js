import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useFavStore = defineStore('fav', () => {
  const favs = ref([])

  const favsObjects = ref([])

  return { 
    favs,
    favsObjects  
  }
})
