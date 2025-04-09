
import http from 'node:http'

import { jsonHandler } from './middlewares/jsonHandler.js'

async function listener(resqust, response) {
    await jsonHandler(resqust, response)
    console.log(resqust.body)
}

http.createServer(listener).listen(3333)//cria um servidor e passa uma função que vai ser executada toda vez que o servidor receber uma requisição