const feed = [];
const feedContainer = document.getElementById('feed');
const postButton = document.getElementById('postButton');
const postText = document.getElementById('postText');

function renderFeed(){
    feedContainer.innerHTML= '';
    feed.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.className = 'post';

        postElement.innerHTML= `
            <img class="avatar" src="imagem/avatar.jpg" alt="Avatar">
            <div class="content">
                <div class="username">${post.username}</div>
                <div>${post.text}</div>
                <img class="cat-image" src="${post.catImage}" alt="Cat Image">
                <button class="like-button" onclick="likePost(${index})">Like (${post.likes})</button>
            </div>
        `;
        feedContainer.appendChild(postElement);
    });
}

async function addPost(){
    const text =postText.value.trim();
    if (!text) return;
    const catImage=await fetch('https://api.thecatapi.com/v1/images/search')
        .then(response =>response.json())
        .then(data =>data[0]?.url || 'https://placekitten.com/300/300')
        .catch(() =>'https://placekitten.com/300/300');

    const newPost = {
        username: 'Ramon',
        avatar: 'imagem/avatar.jpg',
        text,
        catImage,
        likes: 0,
        date: new Date()
    };
    feed.unshift(newPost);
    postText.value = '';
    renderFeed();
}

function likePost(index){
    feed[index].likes++;
    renderFeed();
}

postButton.addEventListener('click', addPost);