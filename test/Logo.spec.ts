import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'
import localVue from '~/test/setup'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo, { localVue })
    expect(wrapper.attributes()['data-testid']).toBe('Logo')
  })
})
