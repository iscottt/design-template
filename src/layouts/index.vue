<script setup lang="ts">
import useDialogTools from '@/core/tools/dialog';
const dialogTools = useDialogTools()

onMounted(() => {
  window.$dialog = dialogTools
})
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>
<style lang='' scoped>
</style>
