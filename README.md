# Basic Color Changer 🎨✨

Change any page’s background color with a single click from the toolbar popup. Built with Chrome Extensions Manifest V3. 🚀

## Features 🌟

- Simple popup UI to pick a hex color or use a color picker. 🎯  
- Applies color to the current tab instantly using MV3 scripting. ⚡  
- Minimal permissions: only `activeTab` and `scripting`. 🔒  

## Folder structure 📁
1. **my-basic-extension/**  
2. ├─ **manifest.json**  
3. ├─ **popup.html**  
4. ├─ **popup.js**  
5. ├─ **background.js**  
6. ├─ **content.js**  
7. └─ **icons/**  
8. &nbsp;&nbsp;&nbsp;&nbsp;├─ **icon16.png**  
9. &nbsp;&nbsp;&nbsp;&nbsp;└─ **icon48.png**


## How it works 🧠

- The popup collects a color value and sends a message to the background service worker.  
- The service worker injects a tiny function into the active tab to update document background color.  
- A minimal content script can mark readiness for easy verification.  

## Installation (Load Unpacked) 🧩

1. Clone or download this repository.  
2. Open Chrome and visit `chrome://extensions`.  
3. Enable “Developer mode.”  
4. Click “Load unpacked” and select the project folder (the one containing `manifest.json`).  
5. Click the toolbar icon, choose a color, and press “Apply to page.”  

## Permissions 🔑

- `activeTab`: enables user-initiated actions on the current page.  
- `scripting`: injects a short function to apply the chosen color.  

## Scripts overview 🧩

- `background.js`: Event-driven service worker that listens for messages and runs code in the active tab.  
- `popup.html` / `popup.js`: UI + logic for color selection, validation, and message sending.  
- `content.js`: Optional helper to confirm content script execution.  

## Roadmap 🗺️

- Keyboard shortcut to re-apply the last used color.  
- Save favorite colors with an options page.  
- Toggle mode: background vs text color changes.  

## Contributing 🤝

Issues and PRs are welcome! Please keep changes focused and include a short description of the intent.

## License 📜

MIT — free to use, modify, and distribute.


