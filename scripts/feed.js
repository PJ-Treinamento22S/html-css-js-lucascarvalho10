const feed = document.querySelector('.all-posts');

const piuPost = document.querySelector('.piu-open-modal');
const enviarPiu = document.querySelector('.piu-btn');
const cancelarPost = document.querySelector('.cancel-btn');

const janelaModal = document.querySelector('.modal-janela-piu');
const bodyFeed = document.querySelector('.body-feed');
const friendsFeed = document.querySelector('.friends-feed');
const counterCar = document.querySelector('.counter-car');
const configMenu = document.queryCommandIndeterm('.config-menu');

const text = document.querySelector('.rules-text');

// obtenção de dados
async function getData() {
    const rawData = await fetch('https://api.json-generator.com/templates/BQZ3wDrI6ts0/data?access_token=n7lhzp6uj5oi5goj0h2qify7mi2o8wrmebe3n5ad');
    const data = await rawData.json();
  
    console.log(data);
    
    return data;
}

// geração dinâmica dos posts
async function postingPosts() {
    const data = await getData();

    data.forEach(usuario=> {
        
            const html = `<div class="post-template" id="${usuario.id}">
                        <div class="user-info">
                            <div class="img-user">
                                <img src="${usuario.user.photo}" alt="">
                            </div>
                            <div class="infos-gerais">
                                <h3 class="user-name">${usuario.user.username}</h3>
                                <p class="user-post-text">${usuario.text}</p>
                            </div>
                        </div>
                        <div class="post-icons">
                            <img src="assets/share.svg" alt="compartilhar" class="icon-post">
                            <span class="${usuario.id}">0</span><img src="assets/heart-post.svg" alt="curtir postagem" class="icon-post" onclick="likeCounter('${usuario.id}')">
                            <img src="assets/more-option.svg" alt="mais opções" class="icon-post" onclick="deletePiu('${usuario.id}')">
                        </div>
                    </div>`; 
            
            feed.insertAdjacentHTML('beforeend', html);
              
    })  
}

// Quando a página carregar, autaliza os posts
document.addEventListener("DOMContentLoaded", postingPosts);

// Função que rastreia os dígitos nos campos
function digitField() {
    let caracteres = document.querySelector('.piu-text').value.split('').length;
    counterCar.innerHTML = `${caracteres}/140`;
    
    if (caracteres >= 140) {
        text.innerHTML = 'Não há mais espaço!'
        text.style.color='#e34444';
    }
    else {
        text.innerHTML = 'leia nossas regras'
        text.style.color='#0077b6';
    }
}

piuPost.addEventListener('click', () => {
    janelaModal.classList.remove('hidden');
    bodyFeed.classList.add('blur-bg');
})

cancelarPost.addEventListener('click', () => {
    janelaModal.classList.add('hidden');
    bodyFeed.classList.remove('blur-bg');
    text.innerHTML = 'leia nossas regras';
    text.style.color= '#0077b6';
})

enviarPiu.addEventListener('click', () => {

    const content = document.querySelector('.piu-text').value;

    const html = `<div class="post-template">
                    <div class="user-info">
                        <div class="img-user">
                            <img src="" alt="">
                        </div>
                        <div class="infos-gerais">
                            <h3 class="user-name">nome do usuário</h3>
                            <p class="user-post-text">${content}</p>
                        </div>
                    </div>
                    <div class="post-icons">
                        <img src="assets/share.svg" alt="compartilhar" class="icon-post">
                        <span>0</span><img src="assets/heart-post.svg" alt="curtir postagem" class="icon-post">
                        <img src="assets/more-option.svg" alt="mais opções" class="icon-post">
                    </div>
                </div>`; 
    
    if (content != '') {
        document.querySelector('.piu-text').value =  '';
        feed.insertAdjacentHTML('afterbegin', html);
        janelaModal.classList.add('hidden');
        bodyFeed.classList.remove('blur-bg');
        text.innerHTML = 'leia nossas regras';
        text.style.color= '#0077b6';
    }
    else {
        
        text.innerHTML = 'Coloque um conteúdo!'
        text.style.color='#e34444';
    }
})

function findingPosts() {
  const html = `<input type="text" placeholder="username" class="search-text" autofocus="on">
  <input type="submit" value="Pesquisar" onclick="postingFinded()" class="search-btn">`

  feed.insertAdjacentHTML('afterbegin', html);
  document.querySelector('.search-piu').classList.add('hidden');
}

async function postingFinded() {
  const data = await getData();

  // Limpando o feed antes da pesquisa   
  document.querySelectorAll('.post-template').forEach(post => post.classList.add('hidden'));

  data.forEach(post => {
      if (post.user.username === (document.querySelector('.search-text').value)) {
          const piu = `<div class="post-template">
                        <div class="user-info">
                            <div class="img-user">
                                <img src="${post.user.photo}" alt="">
                            </div>
                            <div class="infos-gerais">
                                <h3 class="user-name">${post.user.username}</h3>
                                <p class="user-post-text">${post.text}</p>
                            </div>
                        </div>
                        <div class="post-icons">
                            <img src="assets/share.svg" alt="compartilhar" class="icon-post">
                            <span id="like-counter"></span><img src="assets/heart-post.svg" alt="curtir postagem" class="icon-post">
                            <img src="assets/more-option.svg" alt="mais opções" class="icon-post">
                        </div>
                    </div>`; 
            
            feed.insertAdjacentHTML('afterbegin', piu);
      }
      document.querySelector('.search-btn').classList.add('hidden');
      document.querySelector('.search-text').classList.add('hidden');
      document.querySelector('.search-piu').classList.remove('hidden');
  })
}

function deletePiu(id) {
    document.getElementById(`${id}`).classList.add('hidden');
}

function likeCounter(self) {
    console.log(self);
    let likeCount = document.getElementsByClassName(`${self}`);
    console.log(likeCount);

    likeCount[0].innerText = parseInt(likeCount[0].innerText) + parseInt(1);
}