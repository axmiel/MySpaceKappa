//localStorage.clear();
const postInnerContainer = document.querySelector('.posts-inner-container');
const keys = Object.keys(localStorage);
const postRetriever = keys.length;
let postCounter = postRetriever;

window.addEventListener('DOMContentLoaded', function() {
    const sortedKeys = keys.toSorted(function(a, b) {
        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        return 0;
    });

    for (const key of sortedKeys) {
        const postContainer = document.createElement('div');
        const newPost = document.createElement('div');
        const postContent = document.createElement('p');
        const subPostItems = document.createElement('ul');
        const editBtn = document.createElement('li');
        const deleteBtn = document.createElement('li');
        const postDate = document.createElement('li');
        const fromStoragePostContent = localStorage.getItem(key);

        //add classes to created elements
        postContainer.classList.add('new-post-container');
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

        //add retrieved values to elements
        postDate.textContent = new Date(Number(key)).toLocaleString();
        postContent.textContent = fromStoragePostContent;
        newPost.append(postContent);

        //build sub-post items
        subPostItems.append(editBtn, deleteBtn, postDate);

        //group together post content and sub post items
        postContainer.append(newPost, subPostItems);

        //add all items to post container
        postInnerContainer.append(postContainer);

        //add functionality of post editing to edit button
        editBtn.addEventListener('click', function() {
            const newPostContent = window.prompt('Edit your post', postContent.value);
            postContent.textContent = newPostContent;
            localStorage.setItem(key, newPostContent);
        })

        deleteBtn.addEventListener('click', function() {
            if (window.confirm('Do you want to delete your post?')) {
                postContainer.remove();
                localStorage.removeItem(key);
            };
    })
    }
});


const publishBtn = document.getElementById('publish-button');
publishBtn.addEventListener('click', function() {
    const postContainer = document.createElement('div');
    const newPost = document.createElement('div');
    const postContent = document.createElement('p');
    const subPostItems = document.createElement('ul');
    const editBtn = document.createElement('li');
    const deleteBtn = document.createElement('li');
    const postDate = document.createElement('li');
    const currentDate = new Date().toLocaleString();
    const timestamp = Date.now();
    const postInput = document.getElementById('post-input');

    //checks input and alerts user if input field is blank
    if (postInput.value.trim() === '') {
        alert("Please enter some text.");
        postInput.value = '';
        return false;
    }
    
    //add classes to created elements
    postContainer.classList.add('new-post-container');
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

    //store postContent and postDate in localStorage
    localStorage.setItem(timestamp, postInput.value);
    postCounter++;

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
        localStorage.setItem(timestamp, newPostContent)
    })

    deleteBtn.addEventListener('click', function() {
        if (window.confirm('Do you want to delete your post?')) {
            postContainer.remove();
            localStorage.removeItem(timestamp);
        };
    })
});