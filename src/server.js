import http from "node:http"

import { jsonHandler } from "./middlewares/json_handler.js"
import { routeHandler } from "./middlewares/route_handler.js"


async function listener(request, response) {
    await jsonHandler(request, response)
    routeHandler(request, response)

}

http.createServer(listener).listen(3333)