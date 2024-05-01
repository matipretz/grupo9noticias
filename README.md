<div align="center">
    <a href="https://matipretz.github.io/fullstackoeste"><h1>Grupo 9 Noticias - TPO - CaC 4.0 Q1 2024 - Com 24134</h1></a>
    <img alt="bac logo" src="./readme/logo-CAC.png" height="100px" />
    <img alt="cac logo" src="./readme/bac.png" height="100px" />  
</div>

## Menú
A. [Título y Descripción del Proyecto](#título-y-descripción-del-proyecto)

B. [Público Objetivo](#público-objetivo)   

C. [Estructura del Sitio](#estructura-del-sitio)

D. [Diseño y Estilo](#diseño-y-estilo)

E. [Contenido y Funcionalidades](#contenido-y-funcionalidades)
  
1. [Vistas](#vistas)
    
2. [Responsividad](#responsividad)
    
3. [CSS](#css)
    
4. [Scripts](#scripts)
 
   - [viewShow](#viewShow)
 
   - [submit](#submit)
 
   - [toggler](#toggler)
 
 
F. [Integrantes del Equipo](#integrantes-del-equipo)

G. [Recursos Adicionales](#recursos-adicionales)

H. [Links](#links)

## Título y Descripción del Proyecto:
- Título: "Grupo 9 Noticias"
- Descripción: Creación de un portal web  con el objetivo de ofrecer ...

## Público Objetivo:
- ...

## Estructura del Sitio:
- Home: ...
- Servicios: ...
- Nosotros: Integrantes y breve descripción de los valores y la visión del grupo.
- Contacto: Proporciona un formulario para enviar mensajes.

## Diseño y Estilo:
- Estilo visual: Relajado, moderno y tecnológico.
- Colores: Nuestra paleta se basa en colores claros acompañados de elementos blancos, para transmitir frescura y amabilidad. Adoptamos un tema alternativo oscuro con una combinación predominante de negro y grises, equilibrado con elementos llamativos y tonos claros. 
- Tipografía: Fuente estilizada en titulares y cabeceras, Sans-serif para una legibilidad óptima en textos de cuerpo.

## Contenido y Funcionalidades:
### Vistas: 
- Se optó por un sistema de vistas rudimentario, mostrando y ocultando el contenido HTML de cada vista por medio de un script propio.
### Responsividad: 
- Se estudiaron metodos modernos con la simplicidad como requisito fundamental. Se utilizan unidades relativas y propiedades avanzadas de CSS. 
- Las fuentes son reescaladas dinamicamente en proporcion al width del viewport por medio de la propiedad de calculo que ofrece CSS. 
- Las secciones con grids se escalan y disponen automaticamente gracias a grid-template y la propiedad minmax
### CSS: 
- Se utiliza ampliamente un sistema sencillo de variables para determinar la paleta de colores y las fuentes.
### Scripts:

- #### viewShow: 
    Es el script que muestra y oculta las vistas para lograr una aplicacion de una sola pagina (SPA). 
- #### submit: 
    Previene el comportamiento predefinido y verifica el campo de nombre y un patron en el campo de mail. Si obtiene true && true, dispara un alert y envia el formulario a UnStatic.
- #### toggler: 
    Este script apendiza un archivo CSS en el head del documento. Incluye estilos que pisan los colores por defecto, logrando cambiar el tema. Se vale de local storage para persistir la eleccion del usuario a tra vez de las sesiones. Se activa por medio de un checkbox.

### Formulario de contacto:
- Integra [UnStatic](https://forms.un-static.com/), un servicio controlador de correo que remite el formulario sin exponer la casilla.
- A pesar de que se cuenta con validacion incorporada, se opto por utilizar un script estandar para validar las casillas de nombre y de correo.

## Integrantes del Equipo:
- [Lucas Ojunian]()
- [Juan Marcos Kruppa]()
- [Matias Martin Murad Pretz](https://www.linkedin.com/in/matipretz/)
- [Noelia Matamoros]()

  
## Recursos Adicionales:

- [Favicon](https://favicon.io/): Generador de favicon.
- [FontAwesome](https://fontawesome.com/): Resuelve los iconos utilizados en el footer.
- [Google Fonts](https://fonts.google.com/): Importamos las familias Orbitron y Noto Sans Display.
- [MetaTags.io](https://metatags.io/): Genera meta-tags de forma automatica.
- [Tinypng](https://tinypng.com/): Compresor de imagenes.

## Links:
- [Contacto](mailto:mati.pretz+dev@googlemail.com?subject=[G9N])
- [Repositorio](https://github.com/matipretz/grupo9noticias)
- [Sitio](https://grupo9.vercel.app/)

### [Subir](#menú)