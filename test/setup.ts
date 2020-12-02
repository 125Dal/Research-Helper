import { createLocalVue } from '@vue/test-utils'
import { directive } from '~/plugins/directive/testid'

const localVue = createLocalVue()
localVue.directive('test', directive)

const getTestId = (testId: string) => `[data-testId=${testId}]`

export { localVue, getTestId }
