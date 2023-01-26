import {useRouter} from 'vue-router'
function mainRouter(){
    const router = useRouter()
    function toSection(rout:string){
        rout=rout.toLowerCase()
        router.push(`/${rout}`)
    }

    return {toSection}
}

export default mainRouter