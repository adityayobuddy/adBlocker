let isBlocked = true;

const toggleButton = document.getElementById('toggleAdBlock');

toggleButton.addEventListener('click', () => {
  isBlocked = !isBlocked;
  toggleButton.textContent = isBlocked ? "Disable Ad Blocker" : "Enable Ad Blocker";

  // Update background script to enable/disable blocking
  chrome.storage.local.set({ adBlockEnabled: isBlocked });
});