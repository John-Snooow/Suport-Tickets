
import http from 'node:http'

import { jsonHandler } from './middlewares/jsonHandler.js'
import { routeHandler } from './middlewares/routeHandler.js'

async function listener(resqust, response) {
    await jsonHandler(resqust, response)
    routeHandler(resqust, response)
}

http.createServer(listener).listen(3333)//cria um servidor e passa uma função que vai ser executada toda vez que o servidor receber uma requisição