//localStorage.clear();
const postInnerContainer = document.querySelector('.posts-inner-container');

const retrievedData = localStorage.getItem('postData');
let postData = JSON.parse(retrievedData);
if (postData === null) {
    postData = {};
}

const keys = Object.keys(postData);

window.addEventListener('DOMContentLoaded', function() {
    //IMPORTANT TO NOTE:
    //postData is an object literal
    //its key is a post UUID
    //its value is an array with 
    //position 0 = post creation date
    //position 1 = post content
    for (const key of keys) {
        const postContainer = document.createElement('div');
        const newPost = document.createElement('div');
        const postContent = document.createElement('p');
        const subPostItems = document.createElement('ul');
        const editBtn = document.createElement('li');
        const deleteBtn = document.createElement('li');
        const postDate = document.createElement('li');
        const fromStoragePostContent = postData[key][1];

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
        postDate.textContent = new Date(Number(postData[key][0])).toLocaleString();
        postContent.textContent = fromStoragePostContent;
        newPost.append(postContent);

        //build sub-post items
        subPostItems.append(editBtn, deleteBtn, postDate);

        //group together post content and sub post items
        postContainer.append(newPost, subPostItems);

        //add all items to post container
        postInnerContainer.append(postContainer);

        //add functionality of post editing and removal
        editBtn.addEventListener('click', function() {
            const newPostContent = window.prompt('Edit your post', postContent.value);
            postContent.textContent = newPostContent;
            postData[key][1] = newPostContent;
            localStorage.setItem('postData', JSON.stringify(postData));
        })

        deleteBtn.addEventListener('click', function() {
            if (window.confirm('Do you want to delete your post?')) {
                postContainer.remove();
                delete postData[key];
                localStorage.setItem('postData', JSON.stringify(postData));
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
    const postUUID = timestamp * Math.floor((Math.random() + 1) * 1000);
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
    postData[postUUID] = [timestamp, postInput.value];
    localStorage.setItem('postData', JSON.stringify(postData));

/*  
    localStorage.setItem(timestamp, postInput.value);
    postCounter++;
*/

    //build sub-post items
    subPostItems.append(editBtn, deleteBtn, postDate);

    //group together post content and sub post items
    postContainer.append(newPost, subPostItems);

    //add all items to post container
    postInnerContainer.append(postContainer);

    postInput.value = '';

    //add functionality of post editing and removal
    editBtn.addEventListener('click', function() {
        const newPostContent = window.prompt('Edit your post', postContent.value);
        postContent.textContent = newPostContent;
        postData[postUUID][1] = newPostContent;
        localStorage.setItem('postData', JSON.stringify(postData));
    })

    deleteBtn.addEventListener('click', function() {
        if (window.confirm('Do you want to delete your post?')) {
            postContainer.remove();
            delete postData[postUUID];
            localStorage.setItem('postData', JSON.stringify(postData));
        };
    })
});