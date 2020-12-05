<template>
  <input :value="value" class="border border-gray-500 px-3 py-3" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'TheInput',
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    }
  }
})
</script>
