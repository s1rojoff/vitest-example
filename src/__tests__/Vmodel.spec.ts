import { describe, it, expect} from "vitest";
import {mount} from '@vue/test-utils'
import BaseInput from "../components/BaseInput.vue";

describe('Test for v-model', ()=>{
    it('modelValue should be updated' , async ()=>{
        const wrapper = mount(BaseInput, {
            props:{
                modelValue: 'initialText',
                'onUpdate:modelValue': ($event:any) => wrapper.setProps({modelValue: $event})
            }
        })

        await wrapper.find('input').setValue('test')
        expect(wrapper.props('modelValue')).toBe('test')
    })
})