const feed = document.querySelector('.all-posts');

const piuPost = document.querySelector('.piu-open-modal');
const enviarPiu = document.querySelector('.piu-btn');
const cancelarPost = document.querySelector('.cancel-btn');

const janelaModal = document.querySelector('.modal-janela-piu');
const bodyFeed = document.querySelector('.body-feed');
const friendsFeed = document.querySelector('.friends-feed');

const text = document.querySelector('.rules-text');

async function getData() {
    const rawData = await fetch('https://api.json-generator.com/templates/BQZ3wDrI6ts0/data?access_token=n7lhzp6uj5oi5goj0h2qify7mi2o8wrmebe3n5ad');
    const data = await rawData.json();
    console.log(data);
    
    data.forEach(usuario => {
        const html = `<div class="post-template">
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
                        <img src="assets/heart-post.svg" alt="curtir postagem" class="icon-post">
                        <img src="assets/more-option.svg" alt="mais opções" class="icon-post">
                    </div>
                </div>`; 
        
        feed.insertAdjacentHTML('beforeend', html);
                
    })

}

getData();

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
                        <img src="assets/heart-post.svg" alt="curtir postagem" class="icon-post">
                        <img src="assets/more-option.svg" alt="mais opções" class="icon-post">
                    </div>
                </div>`; 
    
    if (content != '') {
        document.querySelector('.piu-text').value =  '';
        feed.insertAdjacentHTML('afterbegin', html);
        janelaModal.classList.add('hidden');
        bodyFeed.classList.remove('blur-bg');
    }
    else {
        
        text.innerHTML = 'Coloque um conteúdo!'
        text.style.color='#e34444';
    }
})