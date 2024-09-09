function changepfpmodal() {
    document.getElementById('pfpInput').click();
}
function changebannermodal() {
    document.getElementById('bannerInput').click();
}
document.getElementById('pfpInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    uploadImage(file, 'pfp');
});
document.getElementById('bannerInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    uploadImage(file, 'banner');
    });
// TO-DO: Fix PFP Uploads (APIv2_Fatal_Error)
async function handlePfpUpload(event) {
    const file = event.target.files[0];
    await uploadImage(file, 'pfp');
}
// TO-DO: Fix Banner Uploads (APIv2_Fatal_Error)
async function handleBannerUpload(event) {
    const file = event.target.files[0];
    await uploadImage(file, 'banner');
}
async function uploadImage(file, type) {
    const url = `/api/v2/science/${type}/${theUidToTargetNow}`; // Endpoint URL
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error('Failed to upload image');
        }

        const data = await response.json();
        console.log(data);

        // Update UI with uploaded image URL
        if (type === 'pfp') {
            // Update profile image URL
            // Example: document.getElementById('pfp').src = data.imageUrl;
        } else if (type === 'banner') {
            // Update banner image URL
            // Example: document.getElementById('banner').style.backgroundImage = `url('${data.imageUrl}')`;
        }
    } catch (error) {
        console.error(error);
    }
}
// TO-DO: Fix Theme Toggles
function toggleTheme() {
    // Boilerplate default theme codes
    const slider = document.querySelector('.toggle-theme .slider');
    // Update slider position based on the current theme
    slider.style.transform = 'translateX(100%)';
    
}

/*  Settings Navigation Settings
    
    Below is a short sweet and simple list of DOM Manipulations
    that control settings displays and such.

    Nothing fancy, just close everything and open the tab you want to see.
*/
function hideAllSettings() {
    document.querySelectorAll(".tobesetnone").forEach(function(element) {
        element.style.display = 'none';
    });
}
function profileSettings() {
    hideAllSettings();
    document.getElementById("profiletabulatordisplay").style.display = 'block';
}
function privacySettings() {
    hideAllSettings();
    document.getElementById("privacytabulatordisplay").style.display = 'block';
}
function notifSettings() {
    hideAllSettings();
    document.getElementById("notificationstabulatordisplay").style.display = 'block';
}
function mailNotifications() {
    hideAllSettings();
    document.getElementById("emailtabulatordisplay").style.display = 'block';
}
function securitySettings() {
    hideAllSettings();
    document.getElementById("securitytabulatordisplay").style.display = 'block';
}
function generalClient() {
    hideAllSettings();
    document.getElementById("generaltabulatordisplay").style.display = 'block';
}
function themeFunction() {
    hideAllSettings();
    document.getElementById("themestabulatordisplay").style.display = 'block';
}
function pluginsList() {
    hideAllSettings();
    document.getElementById("pluginstabulatordisplay").style.display = 'block';
}
function mute_or_unmute() {
    hideAllSettings();
    document.getElementById("blocktabulatordisplay").style.display = 'block';
}
function apiSetting() {
    hideAllSettings();
    document.getElementById("apitabulatordisplay").style.display = 'block';
}
function payloadUrl() {
    hideAllSettings();
    document.getElementById("webhooktabulatordisplay").style.display = 'block';
}
function additionalSettings() {
    hideAllSettings();
    document.getElementById("othersettingsdisplay").style.display = 'block';
}
