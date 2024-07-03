const today = new Date().toDateString().substring(4);

const button = document.getElementById('publish-button').addEventListener('click', function() {
    //gets value from post input field
    //creates a new post in the posts container
    //and clears the value from input field
    document.querySelector('.posts-inner-container').innerHTML += 
        '<div class="post">' +
        '<p class="post-content">' + document.getElementById('post-input').value + '</p>' +
        '<p class="post-date">' + today.substring(4, 6) + ' ' + today.substring(0, 3) + ' ' + today.substring(7,11) + '</p>';
    document.getElementById('post-input').value = '';
})
