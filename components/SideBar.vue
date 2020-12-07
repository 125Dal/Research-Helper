<template>
  <div
    class="overflow-hidden border rounded-xl shadow-xl"
    data-testId="SideBar"
  >
    <header class="px-8 py-6 border-b text-4xl" data-testId="SideBarTitle">
      {{ title }}
    </header>
    <div class="px-8 py-6">
      <slot />
    </div>
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
