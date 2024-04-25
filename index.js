function checkCount() {
    const unreadBadge = document.querySelector('.unread-badge[data-unread-badge="heystack"]');
    if (!unreadBadge) return; // Exit if the badge element is not found
    const currentCount = parseInt(unreadBadge.getAttribute('data-badge-count'));
    if (currentCount > previousCount) {
        // Play sound notification
        const audio = new Audio('https://github.com/Reactongraph/basecamp/blob/master/sounds/notification.mp3');
        audio.play();
        // Update previous count
        previousCount = currentCount;
    }
}

// Check for count changes every 5 seconds
setInterval(checkCount, 1000);

// Initial count
let previousCount = 0;
