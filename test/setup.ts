import { createLocalVue } from '@vue/test-utils'
import { directive } from '~/plugins/directive/testid'

const Vue = createLocalVue()
Vue.directive('test', directive)

export default Vue
