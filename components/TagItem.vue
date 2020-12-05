<template>
  <li
    class="flex justify-between items-center break-all cursor-pointer mb-8 last:mb-0"
    data-testId="TagItem"
    @click="tagClicked"
  >
    <span data-testId="TagName">{{ tag.name }}</span>
    <span
      class="flex-shrink-0 w-13 inline-block ml-4 text-right"
      data-testId="TagCount"
    >
      {{ tag.count }}
    </span>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Tag } from '~/types/valueObject/Tag'

export default defineComponent({
  name: 'TagItem',
  props: {
    tag: {
      type: Object as PropType<Tag>,
      required: true
    }
  },
  setup({ tag }, { emit }) {
    const tagClicked = () => emit('tag-clicked', tag.name)

    return { tagClicked }
  }
})
</script>
