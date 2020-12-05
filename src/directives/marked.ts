import  marked from 'marked'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/dark.css'
import Zoom from '../lib/zoom'
import { DirectiveHook } from 'vue'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('js', javascript)

marked.setOptions({
  highlight(code: any, lang: any) {
    return hljs.highlightAuto(code).value
  }
})

const update: DirectiveHook=(el: any, binding: any)=>{
  if (binding.value) {
    el.innerHTML = marked(binding.value)
    Zoom.listen('img')
  }
}

export default update
