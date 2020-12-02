import { shallowMount } from '@vue/test-utils'
import { PropOptions, RecordPropsDefinition } from 'vue/types/options'
import TheButton from '@/components/TheButton.vue'
import { localVue, getTestId } from './setup'
import { Props } from '~/types/components/TheButton'

describe('TheButton Component', () => {
  const modifiers = ['primary', 'secondary', 'twitter']

  test('Propで渡した値が表示される', () => {
    const text = 'Test text'
    const component = shallowMount(TheButton, {
      localVue,
      propsData: { text }
    })
    const target = component.find(getTestId('Button'))
    expect(target.text()).toBe(text)
  })

  test('Slotで渡したコンテンツが表示される', () => {
    const component = shallowMount(TheButton, {
      slots: {
        icon: '<div data-testId="SlotContent"></div>'
      },
      propsData: { text: '' }
    })
    const target = component.find(getTestId('SlotContent'))
    expect(target.exists()).toBe(true)
  })

  test('特定のPropを渡すとスタイルが変わる', () => {
    modifiers.forEach((modifier) => {
      const component = shallowMount(TheButton, {
        propsData: {
          text: '',
          modifiers: [modifier]
        }
      })
      const target = component.find(getTestId('Button'))
      expect(target.classes().includes(`bg-${modifier}`)).toBe(true)
    })
  })

  test('特定のProp以外を渡すとエラーを吐く', () => {
    const { validator } = (TheButton.props as RecordPropsDefinition<Props>)!
      .modifiers as PropOptions

    expect(validator).toBeTruthy()
    expect(validator!(modifiers[0])).toBe(true)
    expect(validator!('invalid')).toBe(false)
  })

  test('クリックするとEmitが発火する', () => {
    const component = shallowMount(TheButton, {
      propsData: { text: '' }
    })
    component.trigger('click')
    expect(component.emitted('clicked')).not.toBeUndefined()
  })
})
