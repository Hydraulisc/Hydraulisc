// get some ID youngen
const commentInput = document.getElementById('commentInput');
const warningbannerLog = document.getElementById('warningbanner');

// Add an event listener for input changes
commentInput.addEventListener('input', function () {
    // Get the current character count
    const charCount = this.value.length;
  
    // Update the counter
    document.getElementById('charcounter').innerText = charCount + ' / 1500';
});

function createComment(postId) {
    const commentData = commentInput.value;

    // Check if the comment is not empty
    if (commentData.length < 1) {
        // Display an error message or take appropriate action
        console.error('Comment cannot be empty.');
        return;
    }

    fetch(`/api/v2/comments/${postId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: commentData }), // Wrap commentData in an object
    })
    .then(response => {
        if (!response.ok) {
            // Handle non-successful status codes
            throw new Error(`HTTP error! Status: ${response.status}`);
        }    
        return response.json();
    })
    .then(data => {
        commentInput.value = "";
        console.log('Server Response:', data);
        location.reload();
        // rest of your code...
    })
    .catch(error => {
        console.error('Error:', error);
        warningbannerLog.style.display = "block";
    });
}