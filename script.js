var logo = 'fotodiurna';
var clicked = false;
function miFuncion() {
  var imagen = document.getElementById('logo-imagen-desktop');

  if(logo == 'fotodiurna'){
    imagen.src = 'assets/Logo-modo-noc.svg';
    logo = 'fotonocturna'
  }
  else{
    imagen.src = 'assets/logo-desktop.svg';
    logo = 'fotodiurna'
  }
document.body.classList.toggle('dark')

  if(clicked) {
    clicked = false;
    document.getElementById('switch').innerHTML = 'MODO NOCTURNO';
    
  } else {
    clicked = true;
    document.getElementById('switch').innerHTML = 'MODO DIURNO';
  }
}

const divSearch = document.getElementById('div-search')
const searchInput = document.getElementById('search-input')
const resultsEl = document.getElementById('results')
const searchTitle = document.getElementById('search-title')

divSearch.addEventListener('submit', function(e) {
  e.preventDefault()
  const q = searchInput.value

  search(q)
  document.getElementById('search-title').innerHTML = q;

})

function search(q) {

  const apiKey = 'aSkPUTk4nUZBfbcftWwsvZfRvXgqoYAE';
  const pathSearch = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=12`;

  fetch(pathSearch).then(function(res) { 
    return res.json() 
  }).then(function(json) {
    console.log(json.data[0].images.fixed_height.url)

    let resultsHTML = ''

    json.data.forEach(function(obj){
      console.log(obj)

      let url = obj.images.fixed_height.url;
      
      const width =  obj.images.fixed_height.width
      const height =  obj.images.fixed_height.height
      const title=  obj.title

      resultsHTML += `<img class="item" src="${url}" width="${width}" height="${height}" alt="${title}">`
    }) 

    resultsEl.innerHTML = resultsHTML
    }).catch(function(err) {
      console.log(err.message)
    })
}

function tag(q){

  const apiKey = 'aSkPUTk4nUZBfbcftWwsvZfRvXgqoYAE';
  const pathSearch = `https://api.giphy.com/v1/gifs/search/tag?api_key=${apiKey}&q=${q}&limit=12`;

}



