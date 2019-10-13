var postTemplate = `
<div class="post">
    <h3 class="title">{{TITLE}}</h3>
    <h5 class="email">by: {{NAME}} - <a href="#" class="btn_email" data-userid="{{USERID}}">{{EMAIL}}</a></h5>
    <h5 class="TAGS">Tags: {{TAGS}}</h5>
    <p class="body">{{BODY}}</p>    
    <h5 class="LIKES">Likes: {{LIKES}}</h5>
    <h5 class="VIEWS">Views: {{VIEWS}}</h5>
    <h5 class="DatePosted">DatePosted: {{DatePosted}}</h5>
    <hr>
</div>`;



const showPost = () => {
    fetch('http://itla.hectorvent.com/api/post', {
        headers: {
            'Authorization': 'Bearer 4a448df6-6f15-4e2d-9c1c-b2c17eab3205'
        }
    }).then(response => {
        return response.json();
    }).then(response => {
        var postView = '';

        response.forEach(post => {
            postView += postTemplate

                .replace('{{TITLE}}', post.title)
                .replace('{{BODY}}', post.body.substring(0, 100))
                .replace('{{NAME}}', post.userName)
                .replace('{{USERID}}',post.userId)
                .replace('{{TAGS}}',post.tags)
                .replace('{{DatePosted}}',post.createdAt)
                .replace('{{LIKES}}',post.likes)
                .replace('{{VIEWS}}',post.views)
                .replace('{{EMAIL}}', post.userEmail);
                
                
        });

        putHtmlContent(postView);
        const bes = document.getElementsByClassName('btn_email');

        for (let i = 0; i < bes.length; i++) {
            bes[i].addEventListener('click', showUserProfile)
        }
    }).catch(error => {
        console.log(error);
    })

}

const showUserProfile = event => {
    const userId = event.target.getAttribute('data-userid');

    console.log(userId);
}

const showMyPost = () => {
    const content = '<h1>My posts list</h1>';
    putHtmlContent(content);
}

const showProfile = () => {
    const content = '<h1>My profile</h1>';
    putHtmlContent(content);
}

const putHtmlContent = (content) => {
    document.getElementById('app').innerHTML = content;
}

window.onload = () => {
    console.log('Working...')

    document.getElementById('post_view').addEventListener('click', showPost);
    document.getElementById('mypost_view').addEventListener('click', showMyPost);
    document.getElementById('profile_view').addEventListener('click', showProfile);
}