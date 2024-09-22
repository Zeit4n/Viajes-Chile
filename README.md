Esta es una pequeña documentación de los archivos html, css y js utilizados durante el desarrollo de la evaluación. No entramos mucho en detalle sobre cada aspecto,
pero si mostramos como utilizamos el framework Bootstrap CSS y JS.

# index.html
Al interior de la etiqueta <head> importamos recursos externos de Google Fonts y de Font Awesome. Estos links los colocamos al interior de \<head\> \</head\>
```html
<link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
```
## Bootstrap
Al interior de \<head\> \</head\> añadimos el CDN de Bootstrap (versión 5.3.3), el cual nos facilitará diversos estilos que podremos utilizar fácilmente por medio de 
clases.
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
```
Añadimos al final de \<body\> \</body\> estas líneas que nos permiten añadir funcionalidades de Bootstrap JS
```html
 <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
       integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
       crossorigin="anonymous"></script>
```
Los recursos de Bootstrap CSS y JS los utilizamos en diversas partes del código, por ejemplo en la barra de navegación utilizamos recursos de Bootstrap CSS en los que
por medio de clases utilizamos contenedores, columnas, ajustamos márgenes, fijamos la barra de navegación y configuramos opciones de espaciado para pantallas pequeñas (diseño responsivo).
```html
<link rel="shorcut icon" href="assets/img/viajes.svg" type="image/icon-x">
    <nav class="navbar navbar-expand-lg fixed-top mx-0" data-bs-theme="dark">
           <div class="container">
               <a class="navbar-brand" href="#"><img class="img-logo" src="assets/img/viajes.svg" alt=""> Viajes Chile</a>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                   aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarNav">
                   <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                       <li class="nav-item">
                           <a class="nav-link " href="#">Inicio</a>
                       </li>
                       <li class="nav-item">
                           <a class="nav-link " href="#quienes_somos">Quienes somos</a>
                       </li>
                       <li class="nav-item">
                           <a class="nav-link " href="#destacados">Destacados</a>
                       </li>
                       <li class="nav-item">
                           <a class="nav-link " href="#contacto">Contacto</a>
                       </li>
                   </ul>
               </div>
           </div>
    </nav>
```
También utilizamos recursos de Bootstrap CSS en la sección de cards en la cual creamos elementos que contienen una imagen con un texto agrupados en pequeñas subsecciones
```html
<section class="container-fluid bg-dark text-white py-3 text-center">
        <h2 class="display-5" id="destacados">Destacados</h2>
        <hr>
        <div class="row mx-3 pt-2">
            <div class="col-md-3 gy-3">
                <div class="card h-100">
                    <img class="img-card" src="assets/img/card1.jpg" class="card-img-top" alt="montaña">
                    <div class="card-body bg-primary text-white">
                        <h4 class="card-title">Lorem ipsum dolor sit.</h4>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi impedit laudantium autem
                            excepturi unde totam illo fugit consequatur optio officiis!
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 gy-3">
                <div class="card h-100">
                    <img class="img-card" src="assets/img/card2.jpg" class="card-img-top" alt="montaña">
                    <div class="card-body bg-primary text-white">
                        <h4 class="card-title">Lorem ipsum dolor sit.</h4>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi impedit laudantium autem
                            excepturi unde totam illo fugit consequatur optio officiis!
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 gy-3">
                <div class="card h-100">
                    <img class="img-card" src="assets/img/card3.jpg" class="card-img-top" alt="playa">
                    <div class="card-body bg-primary text-white">
                        <h4 class="card-title">Lorem ipsum dolor sit.</h4>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi impedit laudantium autem
                            excepturi unde totam illo fugit consequatur optio officiis!
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 gy-3">
                <div class="card h-100">
                    <img class="img-card" src="assets/img/card4.jpg" class="card-img-top" alt="bosque">
                    <div class="card-body bg-primary text-white">
                        <h4 class="card-title">Lorem ipsum dolor sit.</h4>
                        <p id="parrafo02" class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi impedit laudantium autem
                            excepturi unde totam illo fugit consequatur optio officiis!
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
```
Por otro lado utilizamos funciones de Bootstrap JS en la sección de carrusel de imágenes, en la cual por medio de botones con class="carousel-control-prev" y 
class="carousel-control-next" podemos cambiar las imágenes que se muestran en pantalla.
```html
<div id="carrousel_chile" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="assets/img/carousel1.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="assets/img/carousel2.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="assets/img/carousel3.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carrousel_chile" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carrousel_chile" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>   
    </div>
```
# estilos.css
En el archivo estilos.css añadimos letra Raleway a todo el documento, cambiamos el color de los elementos que aparecen en footer a blanco y cambiamos el ancho del
logo.
```css
body{
    font-family: "Raleway", sans-serif;
    color: #fff;
}

footer a {
    color: white;
}

.img-logo{
    width: 30px;
}

.icon{
    background-color: white;
}
```
# script.js
Añadimos funcionalidades a nuestra página. Estas funcionalidades son
- Cambiar el color de los elementos en la barra de navegación al posar o sacar el mouse sobre cada elemento.
- Crear una alerta con el mensaje "El correo fue enviado correctamente..." cuando el usuario aprete el botón enviar en la sección "Contacto".
```js
$(document).ready(function(){


    $('.navbar a').mouseenter(function() {
        $(this).addClass('text-primary fw-bold');
    });

    $('.navbar a').mouseleave(function() {
        $(this).removeClass('text-primary fw-bold');
    });
    
    $('#botonEnviar').click( function() {
        alert('El correo fue enviado correctamente...');
    })
    });
``` 
