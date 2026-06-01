'use strict'

import {criarPreview} from './pages/preview.js'

const pagina = criarPreview()

document.getElementById('main').appendChild(pagina)

const paginas = {
     
}

function renderizarPagina(nomePagina){
    const pagina = pagina(nomePagina).renderizar()
    document.getElementById('main').appendChild(pagina)   
}

renderizarPagina('preview')