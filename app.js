const publishBtn = document.getElementById('publish-button');

publishBtn.addEventListener('click', function() {
    const postContainer = document.createElement('div');
    const newPost = document.createElement('div');
    const postContent = document.createElement('p');
    const subPostItems = document.createElement('ul');
    const editBtn = document.createElement('li');
    const deleteBtn = document.createElement('li');
    const postDate = document.createElement('li');
    const postInput = document.getElementById('post-input');
    const postInnerContainer = document.querySelector('.posts-inner-container');
    const currentDate = new Date().toLocaleString();
    
    //add classes to created elements
    newPost.classList.add('post');
    postContent.classList.add('post-content');
    subPostItems.classList.add('sub-post-items');
    postDate.classList.add('post-date');
    editBtn.classList.add('sub-post-button');
    deleteBtn.classList.add('sub-post-button');
    
    //add attributes to elements
    editBtn.setAttribute('id', 'edit-button');
    editBtn.setAttribute('role', 'button');
    deleteBtn.setAttribute('id', 'delete-button');
    deleteBtn.setAttribute('role', 'button');
    editBtn.textContent = 'Edit';
    deleteBtn.textContent = 'Delete';
    postDate.textContent = currentDate;

    //get value from input field and add as text to the content of the post
    postContent.textContent = postInput.value;
    newPost.append(postContent);

    //build sub-post items
    subPostItems.append(editBtn, deleteBtn, postDate);

    //group together post content and sub post items
    postContainer.append(newPost, subPostItems);

    //add all items to post container
    postInnerContainer.append(postContainer);

    postInput.value = '';

    //add functionality of post editing to edit button
    editBtn.addEventListener('click', function() {
        const newPostContent = window.prompt('Edit your post', postContent.value);
        postContent.textContent = newPostContent;
    })

    deleteBtn.addEventListener('click', function() {
        if (window.confirm('Do you want to delete your post?')) {
            postContainer.remove();
        };
    })
});