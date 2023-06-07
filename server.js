const express = require('express')
const vue = require('vue')
const vr = require("vue/server-renderer");
//import { createSSRApp } from 'vue'
//import { renderToString } from 'vue/server-renderer'


let someString="Abc,123"

console.log(someString[2]);

const server = express()

server.get('/', (req, res) => {

  const app = vue.createSSRApp({
    data: () => ({ count: 1 }),
    template: `<button @click="count++">{{ count }}</button>`
  })

  vr.renderToString(app).then((html) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `)
  })
})

server.listen(3000, () => {
  console.log('ready')
})