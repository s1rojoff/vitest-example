import { describe, it, expect, test, vi} from "vitest";
import {mount} from '@vue/test-utils'
import router from '../router'
import HomePage from "../views/Home.vue";

function mountHomePage(){
    const wrapper = mount(HomePage,{
        global: {
            plugins: [router]
        }
    })
    return wrapper
}

describe('Test for router', ()=>{
    it('mounts properly', ()=>[
        expect(mountHomePage().text()).toContain('Pages in this project')
    ])

    test('click the texts',async ()=>{
        const push = vi.spyOn(router, 'push')

        await mountHomePage().find('p[id=Counter]').trigger('click')
        expect(push).toHaveBeenCalledOnce()
        expect(push).toHaveBeenCalledWith('counter')
        
        
        await mountHomePage().find('p[id=About]').trigger('click')
        expect(push).toHaveBeenCalledTimes(2)
        expect(push).toHaveBeenCalledWith('about')

        await mountHomePage().find('p[id=Contact]').trigger('click')
        expect(push).toHaveBeenCalledTimes(3)
        expect(push).toHaveBeenCalledWith('contact')
    })
})