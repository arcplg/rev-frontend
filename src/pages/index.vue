<template>
  <div>
    test
  </div>
</template>

<script setup lang="ts">
import { useIndexStore } from '~~/src/store/storeIndex'
const storeIndex = useIndexStore()

onMounted(() => {
  console.log('index: onMounted')
  // storeIndex.initializeApp()
  //   .catch(() => {
  //     // showError(useNuxtApp().$apiError(err))
  //   })
  //   .finally(() => {
  //     storeIndex.setIsContentLoaded(true)
  //   })
})
</script>
