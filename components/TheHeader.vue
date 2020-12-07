<template>
  <header class="h-32 shadow-lg">
    <div
      class="flex justify-between items-center h-full mx-auto md:max-w-screen-md"
    >
      <div class="flex items-center flex-grow h-full">
        <h1 class="text-4xl">Research Helper</h1>
        <div class="relative w-1/2 h-16 ml-12 text-3xl">
          <the-input />
          <button class="absolute right-0 h-full" @click="searchButtonClicked">
            <font-awesome-icon
              :icon="searchIcon"
              class="w-auto-important px-4 text-4xl"
            />
          </button>
        </div>
      </div>
      <div class="flex items-center h-full">
        <div class="w-48 h-20 text-2xl">
          <the-button v-bind="editButtonProps" @clicked="editButtonClicked">
            <template #icon>
              <font-awesome-icon :icon="penIcon" />
            </template>
          </the-button>
        </div>
        <button
          class="flex justify-evenly items-center w-32 h-full ml-12"
          @click="userButtonClicked"
        >
          <div class="w-16 h-16 rounded-full border border-gray-500">
            <img
              :src="icon.path"
              :alt="icon.alt"
              width="32"
              height="32"
              class="w-full h-full rounded-full"
            />
          </div>
          <font-awesome-icon :icon="caretDownIcon" class="text-xl" />
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { faSearch, faPen, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Props } from '~/types/components/TheButton'

export default defineComponent({
  name: 'TheHeader',
  setup() {
    const searchButtonClicked = () => {}

    const editButtonProps: Props = {
      text: '新規投稿',
      modifiers: ['primary']
    }

    const editButtonClicked = () => {}

    const icon = {
      path: require('~/assets/image/anonymousIcon.png'),
      alt: 'ユーザーアイコン'
    }

    const userButtonClicked = () => {}

    return {
      searchIcon: computed(() => faSearch),
      penIcon: computed(() => faPen),
      caretDownIcon: computed(() => faCaretDown),
      searchButtonClicked,
      editButtonProps,
      editButtonClicked,
      icon,
      userButtonClicked
    }
  }
})
</script>

<style lang="scss" scoped>
.w-auto-important {
  width: auto !important;
}
</style>
