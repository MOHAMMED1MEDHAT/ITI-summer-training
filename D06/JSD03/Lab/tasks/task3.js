// Function to get the current count of page refreshes
function getPageRefreshCount() {
    let count = localStorage.getItem("refreshCount");
    return count ? parseInt(count) : 0;
}

// Function to increment the page refresh count
function incrementPageRefreshCount() {
    let count = getPageRefreshCount();
    count++;
    localStorage.setItem("refreshCount", count);
}

// Get the current count and display it
let count = getPageRefreshCount();

for (var i = 0; i <= count; i++) {
    document.body.innerHTML += `<p style="
padding:5px;
width: 20px;
height: 20px;
border: 2px solid red;
margin:0;">${count - i}</p>`;
}

// Increment the count on each refresh
incrementPageRefreshCount();
