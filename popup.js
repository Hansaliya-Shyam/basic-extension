// popup.js
function isValidHex(v) {
  return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v.trim());
}

const colorPicker = document.getElementById("colorPicker");
const hexInput = document.getElementById("hexInput");
const applyBtn = document.getElementById("applyBtn");

// Keep inputs in sync
colorPicker.addEventListener("input", () => {
  hexInput.value = colorPicker.value;
});

hexInput.addEventListener("input", () => {
  const v = hexInput.value.trim();
  if (isValidHex(v)) colorPicker.value = v;
});

applyBtn.addEventListener("click", async () => {
  const color = hexInput.value.trim();
  if (!isValidHex(color)) {
    alert("Enter a valid hex color like #ff9900");
    return;
  }
  try {
    const res = await chrome.runtime.sendMessage({ type: "APPLY_COLOR", color });
    if (!res?.ok) throw new Error("Failed to apply color");
    window.close();
  } catch (e) {
    console.error(e);
    alert("Could not apply color. Check permissions and console.");
  }
});
