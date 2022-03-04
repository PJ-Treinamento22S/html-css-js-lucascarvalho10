const feed = document.querySelector('.all-posts');

async function getData() {
    
    const rawData = await fetch('https://api.json-generator.com/templates/BQZ3wDrI6ts0/data?access_token=n7lhzp6uj5oi5goj0h2qify7mi2o8wrmebe3n5ad');
    const data = await rawData.json();
    console.log(data);
    
    data.forEach(user => {
        const html = `<div class="post-template">
                    <div class="user-info">
                        <div class="img-user">
                            <img src="${user.user.photo}" alt="">
                        </div>
                        <div class="infos-gerais">
                            <h3 class="user-name">${user.user.username}</h3>
                            <p class="user-post-text">${user.text}</p>
                        </div>
                    </div>
                    <div class="post-icons">
                        <img src="../assets/share.svg" alt="compartilhar" class="icon-post">
                        <img src="../assets/heart-post.svg" alt="curtir postagem" class="icon-post">
                        <img src="../assets/more-option.svg" alt="mais opções" class="icon-post">
                    </div>
                </div>`;
        feed.insertAdjacentHTML('beforeend', html);
    })
}

getData();