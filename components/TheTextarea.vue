<template>
  <textarea
    :value="value"
    class="w-full border border-gray-500 px-3 py-3 resize-none"
    :style="style"
  />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

type Style = {
  height: string
}

export default defineComponent({
  name: 'TheTextarea',
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    },
    height: {
      type: Number,
      required: false,
      default: undefined
    }
  },
  setup({ height }) {
    const style: Style = {
      height: height ? `${height}px` : '8rem'
    }

    return { style }
  }
})
</script>
