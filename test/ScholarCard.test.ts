import { shallowMount } from '@vue/test-utils'
import ScholarCard from '@/components/ScholarCard.vue'
import { localVue, getTestId } from './setup'
import { Props } from '~/types/components/ScholarCard'
import { Scholar } from '~/types/entity/Scholar'

const propsData: Props = {
  scholar: {
    title: 'Scholar Title',
    author: '',
    journal: '',
    volume: 0,
    number: 0,
    pageRange: '',
    publishedDate: '',
    briefDescription: 'Brief Description',
    pdfUrl: ''
  }
}

describe('ScholarCard Component', () => {
  const component = shallowMount(ScholarCard, {
    localVue,
    propsData,
    stubs: {
      'font-awesome-icon': true
    }
  })

  test('Propで渡した値が表示される', () => {
    const title = component.find(getTestId('ScholarTitle'))
    const description = component.find(getTestId('ScholarDescription'))

    expect(title.text()).toBe('Scholar Title')
    expect(description.text()).toBe('Brief Description')
  })

  test('クリックするとEmitが発火する', () => {
    const button = component.find(getTestId('CopyButton'))

    button.trigger('click')

    expect(component.emitted('clicked')).not.toBeUndefined()
    expect(
      (component.emitted('clicked')![0] as Scholar[]).includes(
        propsData.scholar
      )
    ).toBe(true)
  })
})
