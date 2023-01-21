import {ref} from 'vue'
export function useCounter(){
    const count = ref<number>(0)
    function incrFunc():number{
        return count.value++
    }
    function decrFunc():number{
        return count.value--
    }
    function resetFunc():number{
        return count.value = 0
    }
    return{
        incrFunc,
        decrFunc,
        resetFunc,
        count
    }
}