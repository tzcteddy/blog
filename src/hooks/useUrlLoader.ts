import {ref} from 'vue'
import axios from 'axios'
function useUrlLoader<T>(){
  const result=ref<T | null>(null)
  const loading=ref(true)
  const loaded=ref(false)
  const error=ref(null)
  axios.post('http://localhost:1111/mock/web/home').then(res=>{
    loading.value=false;
    loaded.value=true;
    result.value=res.data;
    console.log(res)
  }).catch(e=>{
    error.value=e
  })
  return {
    result,
    loading,
    loaded,
    error
  }
}
export default useUrlLoader