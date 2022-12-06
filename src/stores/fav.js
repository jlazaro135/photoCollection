import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFavStore = defineStore('fav', () => {
  const favs = ref([])

  return { 
    favs  
  }
})
