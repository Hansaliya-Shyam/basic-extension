// background.js
chrome.runtime.onInstalled.addListener(() => {
  // One-time install logic
  console.log("Basic Color Changer installed.");
});

// Optional helper to run a function in the active tab
async function runInActiveTab(func, args = []) {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) return;
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func,
    args
  });
}

// Listener for popup requests
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg?.type === "APPLY_COLOR" && msg?.color) {
    runInActiveTab(
      (hex) => {
        document.documentElement.style.transition = "background-color 0.2s ease";
        document.documentElement.style.backgroundColor = hex;
      },
      [msg.color]
    );
    sendResponse({ ok: true });
    return true; // async
  }
});
