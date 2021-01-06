const http = require('http')
const _map = require('./interfaceMap')
const Mock = require('mockjs')
interface Request {
  [props:string]:any
}
http.createServer((req:Request, res:Request) => {
  let headers=req.header
  res.writeHead(200, {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': true,
    'Cache-Control': 'no-cache,no-store', // clear cache
  })
  if (req.method === 'OPTIONS') {
    res.end(null)
  }
  if (req.method === 'POST') {
    console.log(req.url)
    let postData = ''
    req.addListener('data',(dataBuffer:any): any=>{
      return postData += dataBuffer
    });
    req.addListener('end', () => {
      // console.log('url=>', req.url)
      // console.log(2,postData)
      // postData = JSON.parse(postData)
      const originData = _map[req.url]
        // ? Mock.mock(_map[req.url])
        // : ''
      // const data = typeof (_filter[req.url]) === 'function'
      //   ? _filter[req.url](originData, postData)
      //   : originData
      const data = originData
      let strNum:string=((Math.random() - 0.5) + 1) * 500+''
      setTimeout(() => {
        res.end(JSON.stringify(data))
        
      }, parseInt(strNum, 10)) // 随机数
    })
  }
}).listen(1111)
console.log('listening port 1111')
