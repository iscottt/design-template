<script setup lang="ts">
// 继承n-tooltip的所有属性
import { NTooltip } from 'naive-ui'
import { PropType } from 'vue'
const slotRef = ref()
defineProps({
  placement: {
    type: String as PropType<'top' | 'bottom' | 'left' | 'right'>,
    default: 'bottom'
  },
  title: {
    type: String,
    default: ''
  },
})

</script>

<template>
  <n-tooltip v-bind:placement="placement" class="somnia-tooltip" :to="slotRef">
    <template #trigger>
      <slot ref="slotRef" />
    </template>
    {{ title }}
  </n-tooltip>
</template>
