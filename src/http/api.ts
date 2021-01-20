import {axios} from './http';
export const getHome=()=>axios.get('/web/home')
export const getArticle=(params: any)=>axios.get('/web/getArticle',{
  params
})
export const getDetail=(params: any)=>axios.get('/web/detail/'+params.id)
