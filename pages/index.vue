<template>
  <div class="container flex justify-between gap-x-32 max-w-screen-md py-24">
    <main class="w-3/5 flex-grow-0">
      <h2 class="mb-8 text-4xl">
        <font-awesome-icon :icon="calendarIcon" class="mr-4" />
        最近の投稿
      </h2>
      <div v-for="scholar in scholars" :key="scholar.id" class="mb-8">
        <scholar-card :scholar="scholar" />
      </div>
    </main>
    <aside class="flex-grow">
      <side-bar title="タグ別">
        <tag-list v-if="tags.length" :tags="tags" />
        <p v-else class="text-3xl">タグが設定されていません</p>
      </side-bar>
    </aside>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  useFetch
} from '@nuxtjs/composition-api'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { readScholarSummaryResponse } from '~/types/dto/readScholarSummaryResponse'
import { Scholar } from '~/types/entity/Scholar'
import { ScholarMapper } from '~/types/mapper/ScholarMapper'
import { Tag } from '~/types/valueObject/Tag'

type State = {
  scholars: Scholar[]
  tags: Tag[]
}

export default defineComponent({
  name: 'FrontPage',
  setup() {
    const state = reactive<State>({
      scholars: [],
      tags: []
    })

    useFetch(() => {
      const {
        scholars
      }: {
        scholars: readScholarSummaryResponse[]
      } = require('~/assets/json/scholars.json')

      scholars.forEach((scholar) => {
        state.scholars.push(ScholarMapper(scholar))
      })
    })

    return {
      scholars: state.scholars,
      tags: state.tags,
      calendarIcon: computed(() => faCalendar)
    }
  }
})
</script>
