import { Router } from "./router.js";

const router = new Router()
router.add('/', "/pages/home.html")
router.add('/universe', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')
router.add(404, "/pages/404.html")

//Executa o handle quando a pagina é carregada
router.handle()

//Código para funcionar o retorno e avanço de pagina do navegador
window.onpopstate = () => router.handle()

//Possibilita o html chamar a função route
window.route = () => router.route()