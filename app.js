const today = new Date().toDateString().substring(4);

const button = document.getElementById('publish-button').addEventListener('click', function() {

    const postContent = document.createElement('p');
    const postInput = document.getElementById('post-input');
    const postDate = document.createElement('p');
    const newPost = document.createElement('div');
    const postInnerContainer = document.querySelector('.posts-inner-container');
    
    //add classes to created elements
    postContent.classList.add('post-content');
    postDate.classList.add('post-date');
    newPost.classList.add('post');

    //get value from input field and add as text to the content of the post
    postContent.textContent = postInput.value;
    
    //add current date as string to 
    postDate.textContent = today.substring(4, 6) + ' ' + today.substring(0, 3) + ' ' + today.substring(7,11);

    newPost.append(postContent, postDate);

    postInnerContainer.append(newPost);
    
    postInput.value = '';
})
