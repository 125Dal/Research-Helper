import { shallowMount } from '@vue/test-utils'
import TagItem from '@/components/TagItem.vue'
import { localVue, getTestId } from './setup'
import { Props } from '~/types/components/TagItem'

describe('TagItem Component', () => {
  test('Propで渡した値が表示される', () => {
    const propsData: Props = {
      tag: {
        name: 'Test Tag',
        count: 10
      }
    }

    const component = shallowMount(TagItem, {
      localVue,
      propsData
    })

    const targetName = component.find(getTestId('TagName'))
    const targetCount = component.find(getTestId('TagCount'))

    expect(targetName.text()).toBe('Test Tag')
    expect(targetCount.text()).toBe('10')
  })

  test('クリックするとEmitが発火する', () => {
    const propsData: Props = {
      tag: {
        name: 'TagName',
        count: 0
      }
    }

    const component = shallowMount(TagItem, {
      propsData
    })
    component.trigger('click')
    expect(component.emitted('tag-clicked')).not.toBeUndefined()
    expect(
      (component.emitted('tag-clicked')![0] as string[]).includes('TagName')
    ).toBe(true)
  })
})
