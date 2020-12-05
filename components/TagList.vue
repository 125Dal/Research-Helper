<template>
  <ul class="px-8 py-6 text-3xl" data-testId="TagList">
    <tag-item
      v-for="tag in tags"
      :key="tag.name"
      :tag="tag"
      @tag-clicked="tagClicked"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Tag } from '~/types/valueObject/Tag'

export default defineComponent({
  name: 'TagList',
  props: {
    tags: {
      type: Array as PropType<Tag[]>,
      required: true
    }
  },
  setup(_, { emit }) {
    const tagClicked = (value: string) => emit('tag-clicked', value)

    return { tagClicked }
  }
})
</script>
