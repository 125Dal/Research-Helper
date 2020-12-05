import { shallowMount } from '@vue/test-utils'
import SideBar from '@/components/SideBar.vue'
import { localVue, getTestId } from './setup'
import { Props } from '~/types/components/SideBar'

describe('SideBar Component', () => {
  test('Propで渡した値が表示される', () => {
    const propsData: Props = {
      title: 'Title'
    }

    const component = shallowMount(SideBar, {
      localVue,
      propsData
    })

    const target = component.find(getTestId('SideBarTitle'))

    expect(target.text()).toBe('Title')
  })

  test('Slotで渡したコンテンツが表示される', () => {
    const propsData: Props = {
      title: ''
    }

    const component = shallowMount(SideBar, {
      slots: {
        default: '<div data-testId="SlotContent"></div>'
      },
      propsData
    })

    const target = component.find(getTestId('SlotContent'))
    expect(target.exists()).toBe(true)
  })
})
