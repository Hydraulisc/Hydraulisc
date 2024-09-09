// log out
async function handleLogout() {
  try {
    const response = await fetch('/api/v2/user/oauth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();

    if (result.success) {
      // Wait for 2 seconds before redirecting
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } else {
      console.error('Logout failed', result);
    }
  } catch (error) {
    console.error('An error occurred during logout', error);
  }
}

// force regen acc tokens
async function manualRefreshTokens() {
  try {
    const response = await fetch('/api/v2/user/oauth/clrtkn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();

    if (result.success) {
      // Wait for 2 seconds before redirecting
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } else {
      console.error('Error on FORCETOKENREFRESH', result);
    }
  } catch (error) {
    console.error('An error occurred during token refresh', error);
  }
}

/*  force save profile data
    the following code... forces profile data to update.
    function per tab.
*/
async function saveSayonara() {
  const userBiography = document.getElementById("thisistheuserbioid").value
  console.log(userBiography)
  try {
    const response = await fetch('/api/v2/user/updateprofile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userBiography, "uyes": "ok" }),
    });
    const result = await response.json();

    if (result.success) {
      console.log("User Data Updated Successfully!");
    } else {
      console.error("Error on UPDATEUSERDATA", result);
    }
  } catch (error) {
    console.error("An error occured updating user data" + error)
  }
}