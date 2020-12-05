import { mount } from '@vue/test-utils'
import TagList from '@/components/TagList.vue'
import TagItem from '@/components/TagItem.vue'
import { localVue, getTestId } from './setup'
import { Props } from '~/types/components/TagList'

describe('TagList Component', () => {
  test('Propで渡した値が表示される', () => {
    const propsData: Props = {
      tags: [
        {
          name: 'Tag',
          count: 10
        },
        {
          name: 'Tag2',
          count: 100
        }
      ]
    }

    const component = mount(TagList, {
      localVue,
      propsData,
      stubs: {
        'tag-item': TagItem
      }
    })

    expect(component.findAll(getTestId('TagName')).at(0).text()).toBe('Tag')
    expect(component.findAll(getTestId('TagCount')).at(0).text()).toBe('10')

    expect(component.findAll(getTestId('TagName')).at(1).text()).toBe('Tag2')
    expect(component.findAll(getTestId('TagCount')).at(1).text()).toBe('100')
  })

  test('クリックするとEmitが発火する', () => {
    const propsData: Props = {
      tags: [
        {
          name: 'Tag',
          count: 10
        }
      ]
    }

    const component = mount(TagList, {
      localVue,
      propsData,
      stubs: {
        'tag-item': TagItem
      }
    })

    const tagItem = component.find(getTestId('TagItem'))
    tagItem.trigger('click')

    expect(component.emitted('tag-clicked')).not.toBeUndefined()
    expect(
      (component.emitted('tag-clicked')![0] as string[]).includes('Tag')
    ).toBe(true)
  })
})
