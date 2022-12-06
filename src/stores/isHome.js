import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBackgroundHomeStore = defineStore('isHome', () => {
  const isHome = ref(false)

  return { 
    isHome  
  }
})
