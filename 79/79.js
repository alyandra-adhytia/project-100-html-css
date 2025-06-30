const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const charNoSpaceCount = document.getElementById("charNoSpaceCount");
const wordCount = document.getElementById("wordCount");

textInput.addEventListener("input", () => {
  const text = textInput.value;

  charCount.textContent = text.length;

  charNoSpaceCount.textContent = text.replace(/\s/g, "").length;

  const words = text.trim().split(/\s+/);
  wordCount.textContent = text.trim() === "" ? 0 : words.length;
});