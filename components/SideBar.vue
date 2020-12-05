<template>
  <div
    class="overflow-hidden border border-gray-500 rounded-xl shadow-xl"
    data-testId="SideBar"
  >
    <header class="px-8 py-6 border-b text-4xl" data-testId="SideBarTitle">
      {{ title }}
    </header>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'SideBar',
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>
