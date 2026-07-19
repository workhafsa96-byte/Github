function getUser() {
    let username = document.getElementById('username').value;
    let profile = document.getElementById('profile');
    fetch(`https://api.github.com/users/${username}`).then((response) => {
        return response.json();
    }).then((user) => {
        profile.innerHTML = user.message ? 'User Not Found' : `
        <div>
       <img src="${user.avatar_url}">
        <P>Username:${user.name || 'No Name'}</p>
        <p>Bio:${user.bio || 'No Bio'}</p>
        <P>Followers:${user.followers || 'No Followers'}</p>
        <P> Followings:${user.following || 'No Following'}</p>
        <p><strong>Public Repositories:</strong> ${user.public_repos}</p>
        </div>`
    })
}