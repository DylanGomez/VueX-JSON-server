import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import SongTable from '@/components/SongTable.vue'

describe('SongTable.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = shallowMount(SongTable, {
            propsData: { msg },
        })
        expect(wrapper.text()).to.include(msg)
    })
})
