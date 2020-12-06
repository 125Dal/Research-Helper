<template>
  <button
    data-testId="Button"
    class="w-full h-full border rounded-2xl"
    :class="classes"
    @click="clicked"
  >
    <span v-if="$slots.icon" class="inline-block mr-4" data-testId="ButtonIcon">
      <slot name="icon" />
    </span>
    {{ text }}
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import { Modifiers, Props } from '~/types/components/TheButton'

export { Modifiers, Props }

export default defineComponent({
  name: 'TheButton',
  props: {
    text: {
      type: String,
      required: true
    },
    modifiers: {
      type: Array as PropType<Modifiers[]>,
      required: false,
      default: undefined,
      validator: (value: string) => value in Modifiers
    }
  },
  setup({ modifiers }, { emit }) {
    const classes = computed(() => {
      if (!modifiers) return null
      return modifiers.map(
        (modifier) => `bg-${modifier} text-${modifier} border-${modifier}`
      )
    })

    const clicked = () => emit('clicked')

    return { classes, clicked }
  }
})
</script>
