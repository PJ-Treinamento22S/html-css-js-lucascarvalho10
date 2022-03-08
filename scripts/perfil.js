const configBtn = document.querySelector('.config-menu');
const bodyPerfil = document.querySelector('.body-perfil');
const btnCancel = document.querySelector('.cancel-btn');
const submitConfig = document.querySelector('.config-btn');

const exitFriends = document.querySelector('.exit-x');
const openFriends = document.querySelector('.open-friends');

async function getData() {
    const rawData = await fetch('https://api.json-generator.com/templates/BQZ3wDrI6ts0/data?access_token=n7lhzp6uj5oi5goj0h2qify7mi2o8wrmebe3n5ad');
    const data = await rawData.json();
    
    return data;
}

async function postingFriends() {
    const data = await getData();
    const uniqueFriends = new Array();

    data.forEach(post => {
        !(uniqueFriends.includes(post.user.username))  && uniqueFriends.push(post.user);
    })
    
    uniqueFriends.forEach(user => {
        const html = `<div class="topics-piu">
                        <div class="img-topics"><img src="${user.photo}" alt=""></div>
                            <div class="topic-desc">
                                <h3 class="topic-name">${user.username}</h3>
                                <p class="topic-desc-text">${user.first_name + user.last_name}</p>
                            </div>
                        </div>`
        document.querySelector('.friends-div').insertAdjacentHTML('beforeend', html);
    })
}

postingFriends();

configBtn.addEventListener('click', () => {
    bodyPerfil.classList.add('blur-bg');
    document.querySelector('.config-modal').classList.remove('hidden');
})

// Alterando dados do perfil
btnCancel.addEventListener('click', () => {
    bodyPerfil.classList.remove('blur-bg');
    document.querySelector('.config-modal').classList.add('hidden');
})

submitConfig.addEventListener('click', () => {
    document.querySelector('.header-user-name').innerHTML = document.querySelector('#username').value;
    document.querySelector('.header-descricao').innerHTML = document.querySelector('#descricao').value;

    bodyPerfil.classList.remove('blur-bg');
    document.querySelector('.config-modal').classList.add('hidden');
})

// Vendo amigos
openFriends.addEventListener('click', () => {
    bodyPerfil.classList.add('blur-bg');
    document.querySelector('.friends-modal').classList.remove('hidden');
})

exitFriends.addEventListener('click', () => {
    bodyPerfil.classList.remove('blur-bg');
    document.querySelector('.friends-modal').classList.add('hidden');
})