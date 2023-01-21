import {describe, it, expect} from 'vitest'
import Counter from '../components/Counter/index.vue'
import { useCounter } from '../composable/counter'
import {mount} from '@vue/test-utils'
 describe('test from counter', () => {
    const wrapper = mount(Counter)
    it('should render correctly', () => {
        expect(wrapper.html()).toContain("Current count: 0")
    })
    it('should increment correctly', async () => {
        await wrapper.find('[data-type="increment"]').trigger('click'),
        expect(wrapper.html()).toContain("Current count: 1")
    })
    it('should increment correctly', async () => {
        await wrapper.find('[data-type="reset"]').trigger('click'),
        expect(wrapper.html()).toContain("Current count: 0")
    })
    it('should decriment correctly', async () => {
        await wrapper.find('[data-type="decriment"]').trigger('click'),
        expect(wrapper.html()).toContain("Current count: -1")
    })
 })
 describe('test for counter functions', ()=>{
    const {count, incrFunc, decrFunc, resetFunc} = useCounter()
    it('test for increment function', () => {
        expect(count.value).toBe(0)
        incrFunc();
        expect(count.value).toBe(1)
    });
    it('test for reset function', () => {
        expect(count.value).toBe(1)
        resetFunc();
        expect(count.value).toBe(0)
    })
    it('test for decriment function', () => {
        expect(count.value).toBe(0)
        decrFunc();
        expect(count.value).toBe(-1)
    })
 })