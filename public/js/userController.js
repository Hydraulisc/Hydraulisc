/*  MORE follows logic...
    I detest this code with a passion unlike anything I've ever known
    That being said, documented as well as I could.....
*/

function followUser(userId) {
    // Make a POST request to the follow API endpoint
    fetch(`/api/v1/follow/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      // Handle the response
      if (response.ok) {
        document.querySelector(".join_star_button").disabled = true
        document.querySelector(".join_star_button").style.cursor = "default"
        document.querySelector(".join_star_button").innerHTML = "unfollow"
      } else {
        window.alert('Error: Failed to follow user. Check console for more info');
      }
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
  }
  
function unfollowUser(userId) {
  // Make a POST request to the unfollow API endpoint
  fetch(`/api/v1/unfollow/${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    // Handle the response
    if (response.ok) {
      document.querySelector(".join_star_button").innerHTML = "follow"
    } else {
      window.alert('Failed to unfollow user. Check console for more info');
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
  }