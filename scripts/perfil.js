const configBtn = document.querySelector('.config-menu');
const bodyPerfil = document.querySelector('.body-perfil');
const btnCancel = document.querySelector('.cancel-btn');
const submitConfig = document.querySelector('.config-btn');

const exitFriends = document.querySelector('.exit-x');
const openFriends = document.querySelector('.open-friends');

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