<template>
  <div class="relative flex h-80 border border-gray-500">
    <div class="flex-shrink-0 w-56 h-full bg-gray-300"></div>
    <div class="flex flex-col justify-between py-8 pl-8 pr-4">
      <h2 class="mr-24 text-3xl" data-testId="ScholarTitle">
        {{ scholar.title }}
      </h2>
      <dl class="text-2xl text-gray-800">
        <dt class="hidden">一言概要</dt>
        <dd data-testId="ScholarDescription">{{ scholar.briefDescription }}</dd>
      </dl>
    </div>
    <button
      class="absolute right-0 top-0 text-4xl px-8 py-4 border-b border-l rounded-bl-2xl border-gray-500"
      data-testId="CopyButton"
      @click="clicked"
    >
      <font-awesome-icon :icon="clipboardIcon" class="text-gray-600" />
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { Scholar } from '~/types/entity/Scholar'

export default defineComponent({
  name: 'ScholarCard',
  props: {
    scholar: {
      type: Object as PropType<Scholar>,
      required: true
    }
  },
  setup({ scholar }, { emit }) {
    const clicked = () => emit('clicked', scholar)

    return {
      clipboardIcon: computed(() => faClipboard),
      clicked
    }
  }
})
</script>

<style lang="scss" scoped>
.h-80 {
  height: 20rem;
}
</style>
