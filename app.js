// fetch
const searchMovies = document.getElementById('mostrar-busqueda');
const wrap = document.getElementById('wrap');
const cuadro = document.getElementById('cuadro-busqueda');
const detalle = document.getElementById('cuadro-info');
const fondo = document.getElementById('fondo');
const llamanos = document.getElementById('contacto');
const bloque = document.getElementById('bloque');

const printMovies = (data) => {
    let stringBusqueda = '';
    data.forEach((ele) => {
        if(ele.Poster !== "N/A"){
        let listData = ` 
     <div class="bloque-app"><div>
     <img data-id="${ele.imdbID}" src="${ele.Poster}" class="img" style="height:40vh; width:28vh;
    border-radius: 4px; object-fit: fill;" alt= "..." >
     <div class="title-principle">
       <p>${ele.Title.toUpperCase()}</p>
       <p>${ele.Year}</p>
       <p><i style='color:#FFC700' class='bx bxs-star bx-spin'id='bx'></i>
       <i style='color:#FFC700' class='bx bxs-star bx-spin'id='bx'></i>
       <i style='color:#FFC700' class='bx bxs-star bx-spin'id='bx'></i></p>
      </div>
   </div></div> `;
        stringBusqueda += listData;}
    });
    searchMovies.innerHTML = stringBusqueda;
    detalle.classList.add('hide');
    llamanos.classList.add('hide');
};
const search = document.getElementById('busqueda');
let valueSearch;
search.addEventListener('search', () => {
   valueSearch = search.value;
   mostrarBusqueda(`https://www.omdbapi.com/?s=${encodeURI(valueSearch)}&apikey=35ae330e`);
});
/****/
const infoPeliculas = document.getElementById('info-peliculas');
const infoPeli = (data) => {
    const newArray = Object.entries(data);
    let stringInfo = ' ';
    for (let i = 0; i < newArray.length; i++) {
   let numero = parseInt(newArray[16][1]/2);
   let estrellas = ' '
   for (let j=0; j<numero;j++){
     estrellas += "<i style='color:#FFC700' class='bx bxs-star bx-spin'id='bx'></i>";
   }
        stringInfo += `
        <div class="positionRead">
        <h1>${newArray[0][1]}</h1>
        <div class="photo"><div class="line">
        <img data-id="${newArray[13][1]}" src="${newArray[13][1]}" alt="imagen">
        </div></div>
        <div id="info-peliculas">
         <p class="text-crazy"><b>Descripción</b>: ${newArray[9][1]}</p>
        </div>
        </div>
        <div> 
         <p class="text-separation"> <b>Genero</b>: ${newArray[5][1]} </p>
         <p class="text-separation"> <b>Año</b>: ${newArray[1][1]} </p>
         <p class="text-separation"> <b>Duracion</b>: ${newArray[4][1]} </p>
         <p class="text-separation"> <b>Director</b>: ${newArray[6][1]} </p>    
         <p class="text-separation"> <b>Productora</b>: ${newArray[22][1]} </p>
        </div>
        <div class="estrellas">
        <p class="text-separation"> ${estrellas} </p>
        </div>
        <div>
        <p class="text-alegator"> <span class="reparto"><b>Actores</b> de Reparto:</span> ${newArray[8][1]} </p>   
        </div>
        `;
        infoPeliculas.innerHTML = stringInfo;
        searchMovies.classList.add('hide');
        wrap.classList.add('hide');
        cuadro.classList.add('hide');
        fondo.classList.add('hide');
        llamanos.classList.add('hide');
        detalle.classList.remove('hide');
        return stringInfo;
   }
   return newArray;
};

searchMovies.addEventListener('click', (event) => {
   const id = event.target.getAttribute("data-id");
   mostrarInfo(`https://www.omdbapi.com/?i=${id}&apikey=35ae330e`);
});

/*** */
const home = document.getElementById('home');
home.addEventListener('click', () => {
  location.reload();
  searchMovies.classList.remove('hide');
  wrap.classList.remove('hide');
  cuadro.classList.remove('hide');
  fondo.classList.remove('hide');
  detalle.classList.add('hide');
  llamanos.classList.add('hide');
});

const first = document.getElementById('first');
first.addEventListener('click', () => {
  location.reload();
  searchMovies.classList.remove('hide');
  wrap.classList.remove('hide');
  cuadro.classList.remove('hide');
  fondo.classList.remove('hide');
  detalle.classList.add('hide');
  llamanos.classList.add('hide');
});

const contactanos = document.getElementById('contactanos');
contactanos.addEventListener('click', (event) => {
    event.preventDefault();
  searchMovies.classList.add('hide');
  wrap.classList.add('hide');
  cuadro.classList.add('hide');
  fondo.classList.add('hide');
  detalle.classList.add('hide');
  bloque.classList.add('hide');
  llamanos.classList.remove('hide');
});

const talking = document.getElementById('talking');
talking.addEventListener('click', (event) => {
  event.preventDefault();
  searchMovies.classList.add('hide');
  wrap.classList.add('hide');
  cuadro.classList.add('hide');
  fondo.classList.add('hide');
  detalle.classList.add('hide');
  bloque.classList.add('hide');
  llamanos.classList.remove('hide');
});

const name= document.getElementById('name');
const mail= document.getElementById('mail');
const mensaje= document.getElementById('mensaje');
const enviar= document.getElementById('enviar');
enviar.addEventListener('click', () =>{
 name.value='';
 mail.value='';
 mensaje.value='';
})
