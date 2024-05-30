fetch('https://grupo9back-production.up.railway.app/noticias')
  .then(res => res.json())
  .then(noticias => {
    const html = noticias
      .map(noticia => {
        return `
        <article data-id="${noticia.id}">
          <div class="unaNotadetalle aparecer">
            <div class="noticiasfoto">
              <img src="${noticia.imagenUrl}" alt="${noticia.titulo}">
            </div>
            <div class="noticiasTexto">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">${noticia.categoria}</p>
              <p class="text-xl font-bold  sm:text-2xl slide-in-left"> ${noticia.titulo}</p>
              <p class="text-sm copete"> ${noticia.copete}</p>
            </div>
          </div>
        </article>
        `
      })
      .join('')

    const contenedor = document.getElementById('contenedorListadoNoticias')
    contenedor.innerHTML = html
  })
  .catch(error => {
    console.error('Error al cargar las noticias:', error)
    const contenedor = document.getElementById('contenedorListadoNoticias')
    contenedor.innerHTML =
      '<div align="center">Error al cargar las noticias.</div>'
  })

const contenedor = document.getElementById('contenedorListadoNoticias')
contenedor.innerHTML = '<div align="center">Cargando noticias...</div>'
