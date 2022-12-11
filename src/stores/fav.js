import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useFavStore = defineStore('fav', () => {
  const favs = ref([])
  const favsObjects = ref([])

  favs.value = JSON.parse(localStorage.getItem('photoIds'))
  favsObjects.value = JSON.parse(localStorage.getItem('photoObjects'))


  return { 
    favs,
    favsObjects  
  }
})
