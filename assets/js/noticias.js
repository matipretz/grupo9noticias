const LeerApi = async () => {
  let url = "https://grupo9.vercel.app/json/noticias.json";
  const res = await fetch(url);
  const datos = await res.json();
  return datos;
};

async function Noticias() {
  const contenedor = document.getElementById("contenedorListadoNoticias");
  contenedor.innerHTML = '<div align="center">Cargando noticias...</div> ';

  console.log(" cargando noticias ");
  await LeerApi()
    .then((resultadoapi) => {
      contenedor.innerHTML = "";

      for (let dato of resultadoapi.data) {
        contenedor.innerHTML +=
          '<div class="unaNotadetalle aparecer">' +
          '<div class="noticiasfoto"><img alt="" src="' +
          dato.imagenUrl +
          '"></div>' +
          '<div class="noticiasTexto">' +
          '<p class="text-sm font-medium uppercase tracking-widest text-pink-500">' +
          dato.categoria +
          " </p>" +
          '<p class="text-xl font-bold  sm:text-2xl slide-in-left">' +
          dato.titulo +
          "</p>" +
          '<p class="text-sm copete">' +
          dato.copete +
          " </p></div></div>";
      }
    })
    .catch((err) => (contenedor.innerHTML = "Ups Error<br>"));
}

Noticias();
