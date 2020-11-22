import { DirectiveOptions } from 'vue/types'

export const directive: DirectiveOptions = {
  bind(el, binding) {
    const isDev = process.env.NODE_ENV !== 'production'
    isDev && binding.value && el.setAttribute('data-testid', binding.value)
  }
}
