async function searchUser() {
    const input= document.getElementById('search-input');
    const query= input.value;
    const userList= document.getElementById('user-list');
    
    userList.innerHTML ='';
    
    if (!query) {
        return;
    }

    try {
        const response= await fetch(`https://api.github.com/search/users?q=${query}`);
        const data= await response.json();

        if (data.items && data.items.length > 0) {
            data.items.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.innerHTML = `
                    <img src="${user.avatar_url}" alt="${user.login}">
                    <span>${user.login}</span>
                    <a href="${user.html_url}" target="_blank">Ver perfil</a>
                `;
                userList.appendChild(userDiv);
            });
        } else {
            const noResultsDiv =document.createElement('div');
            noResultsDiv.classList.add('no-results');
            noResultsDiv.textContent = 'Não foram encontrados usuários para esta pesquisa.';
            userList.appendChild(noResultsDiv);
        }
    } catch (error) {
        console.error('Erro na busca:', error);
    }
}
