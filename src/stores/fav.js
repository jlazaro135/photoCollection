import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useFavStore = defineStore('fav', () => {
  const favs = ref([])
  const favsObjects = ref([])
  
  if(localStorage.getItem('photoIds'))favs.value = Array.from(JSON.parse(localStorage.getItem('photoIds')))
  if(localStorage.getItem('photoObjects'))favsObjects.value = Array.from(JSON.parse(localStorage.getItem('photoObjects')))
  console.log(favs.value)
  console.log(favsObjects.value)

  return { 
    favs,
    favsObjects  
  }
})
