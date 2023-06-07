import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    console.log("wrapper", wrapper.text())

    expect(wrapper.text()).toContain('Hello Vitest')

    const wrapper2 = mount(HelloWorld, { props: { msg: 'Hello Vitest 2' } })
    console.log("wrapper", wrapper.text())

    expect(wrapper2.text()).toContain('Hello Vitest 2')
  })
})
